// Absolute Dependencies
import React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import IconTimer from 'material-ui/svg-icons/image/timer';

// Relative Dependencies
import { timerComplete } from '../actions/index';
import parseMillisecondsIntoReadableTime from '../api/TimeUtility';

// Variable Declarations

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: this.props.length,
      elapsed: 0,
      paused: !this.props.start,
      completed: 0,
      readable: '',
      breakTime: 0,
    };
  }

  componentWillMount() {
    console.log(`Length: ${this.state.length}\nPaused: ${this.state.paused}`);
    this.timer = setInterval(() => {
      const elapsed = Math.round(this.state.length - this.state.elapsed);
      this.setState({ readable: parseMillisecondsIntoReadableTime(elapsed) });
      if (this.state.paused !== true) {
        this.setState({ elapsed: this.state.elapsed + 100 });
      }
      if (this.state.elapsed >= this.state.length) {
        this.complete();
      }
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  onClickStart(e) {
    e.preventDefault();
    this.setState({ paused: false });
    console.log('Start Clicked');
  }

  onClickPause(e) {
    e.preventDefault();
    this.setState({ paused: true });
    console.log('Pause Clicked');
  }

  onClickComplete(e) {
    e.preventDefault();
    this.complete();
    console.log('Complete Clicked');
  }

  onClickReset(e) {
    e.preventDefault();
    this.complete(false);
    console.log('Reset Clicked');
  }

  complete(completed = true) {
    const completeAmount = completed ? 1 : 0;
    this.props.timerComplete();
    this.setState({ paused: true,
      elapsed: 0,
      length: this.state.settings.timerLength,
      completed: this.props.timerCompleted + completeAmount });
  }

  updateSetting(e, setting) {
    e.preventDefault();
    let value = e.target.value;
    console.log(`Original Value: ${value}`);
    value = value.replace(/[^0-9]/g, '');
    value = parseInt(value, 10);
    console.log(`Sanitised Value: ${value}`);
    this.setState({ settings: { ...this.state.settings, [setting]: value } });
    return;
  }

  renderControls() {
    let callback;
    let label;

    if (this.state.paused) {
      callback = this.onClickStart;
      label = 'Start';
    } else {
      callback = this.onClickPause;
      label = 'Pause';
    }
    return (
      <FlatButton
        label={label}
        style={this.props.styles.timerButton}
        backgroundColor={this.props.styles.buttonConfig.backgroundColor}
        hoverColor={this.props.styles.buttonConfig.hoverColor}
        onClick={e => callback(e)}
      />
    );
  }

  render() {
    return (
      <div>
        <span>Complete: {this.state.completed}</span>
        <div>
          <p>Time Remaining:
            <span>{ this.state.readable}</span>
          </p>
        </div>
        <br />
        <div className="Controls">
          {this.renderControls()}
          <FlatButton
            label="Complete"
            // icon={icon}
            style={this.props.styles.timerButton}
            backgroundColor={this.props.styles.buttonConfig.backgroundColor}
            hoverColor={this.props.styles.buttonConfig.hoverColor}
            onClick={e => this.complete(e)}
          />
          <FlatButton
            label="Reset"
            // icon={icon}
            style={this.props.styles.timerButton}
            backgroundColor={this.props.styles.buttonConfig.backgroundColor}
            hoverColor={this.props.styles.buttonConfig.hoverColor}
            onClick={e => this.onClickReset(e)}
          />
        </div>
      </div>
    );
  }
}

Timer.propTypes = {
  length: React.PropTypes.number,
  start: React.PropTypes.bool,
  timerComplete: React.PropTypes.func,
  timerCompleted: React.PropTypes.number,
  styles: React.PropTypes.object,
};

Timer.defaultProps = {
  length: 1500000,
  start: false,
  styles: {
    timerButton: {
      width: `${100}%`
    }
  }
};

function mapStateToProps(state) {
  return {
    timerCompleted: state.BreakTrack.timerComplete,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    timerComplete: () => dispatch(timerComplete()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
