// Absolute Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Relative Dependencies
import { pomoComplete } from '../actions/index';

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
      settings: {
        shown: false,
        timerLength: 1500000, // 25 minutes
        breakLength: 300000, // 5 minutes
        pomoPerBreak: 4, // Default Pomodoro
        extendedBreakLength: 1800000, // 30 minutes
      },
    };
  }

  componentWillMount() {
    console.log(`Length: ${this.state.length}\nPaused: ${this.state.paused}`);
    this.timer = setInterval(() => {
      const elapsed = Math.round(this.state.length - this.state.elapsed);
      this.setState({ readable: this.parseMillisecondsIntoReadableTime(elapsed) });
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

  onClickShowSettings(e) {
    e.preventDefault();
    this.setState({ settings: { ...this.state.settings, shown: true } });
    console.log('Showing Settings');
    console.log(this.state.settings);
  }

  onClickHideSettings(e) {
    e.preventDefault();
    this.setState({ settings: { ...this.state.settings, shown: false } });
    console.log('Hiding Settings');
    console.log(this.state.settings);
  }

  // eslint-disable-next-line
  parseMillisecondsIntoReadableTime(milliseconds) {
    // Get hours from milliseconds
    const hours = milliseconds / (1000 * 60 * 60);
    const absoluteHours = Math.floor(hours);
    const minutes = (hours - absoluteHours) * 60;
    const absoluteMinutes = Math.floor(minutes);
    const seconds = (minutes - absoluteMinutes) * 60;
    const absoluteSeconds = Math.floor(seconds);

    const h = absoluteHours > 9
      ? absoluteHours
      : `0${absoluteHours}`;
    const m = absoluteMinutes > 9
      ? absoluteMinutes
      : `0${absoluteMinutes}`;
    const s = absoluteSeconds > 9
        ? absoluteSeconds
        : `0${absoluteSeconds}`;

    let readable;
    if (absoluteHours > 0) {
      readable = `${h}:${m}:${s}`; // TODO xD
    }

    readable = `${m}:${s}`;

    return readable;
  }

  complete(completed = true) {
    const completeAmount = completed ? 1 : 0;
    this.props.pomoComplete();
    this.setState({ paused: true,
      elapsed: 0,
      length: this.state.settings.timerLength,
      completed: this.props.pomoCompleted + completeAmount });
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
    if (this.state.paused) {
      return (<button onClick={e => this.onClickStart(e)}>Start</button>);
    }
    return (<button onClick={e => this.onClickPause(e)}>Pause</button>);
  }

  renderSettings() {
    if (!this.state.settings.shown) {
      return (
        <div className="Settings">
          <button onClick={e => this.onClickShowSettings(e)}>Show Settings</button>
        </div>
      );
    }
    return (
      <div className="Settings">
        <button onClick={e => this.onClickHideSettings(e)}>Hide Settings</button>
        <p>Settings</p>
        <div className="input-field"> {/* Timer Length */}
          <input
            ref={(timerLength) => { this.timerLength = timerLength; }}
            type="text"
            className="validate"
            style={{ display: 'block' }}
            onChange={e => this.updateSetting(e, 'timerLength')}
            defaultValue={this.state.settings.timerLength}
          />
          <label htmlFor="timerLength">Timer Length(
            {this.parseMillisecondsIntoReadableTime(this.state.settings.timerLength)}
          )</label>
        </div>
        <br />
        <div className="input-field"> {/* Break Length */}
          <input
            ref={(breakLength) => { this.breakLength = breakLength; }}
            type="text"
            className="validate"
            style={{ display: 'block' }}
            onChange={e => this.updateSetting(e, 'breakLength')}
            defaultValue={this.state.settings.breakLength}
          />
          <label htmlFor="timerLength">Break Length(
            {this.parseMillisecondsIntoReadableTime(this.state.settings.breakLength)}
          )</label>
        </div>
        <br />
        <div className="input-field"> {/* Extended Break Length */}
          <input
            ref={(extendedBreakLength) => { this.extendedBreakLength = extendedBreakLength; }}
            type="text"
            className="validate"
            style={{ display: 'block' }}
            onChange={e => this.updateSetting(e, 'extendedBreakLength')}
            defaultValue={this.state.settings.extendedBreakLength}
          />
          <label htmlFor="timerLength">Extended Break Length(
            {this.parseMillisecondsIntoReadableTime(this.state.settings.extendedBreakLength)}
          )</label>
        </div>
        <br />
        <div className="input-field"> {/* Pomodoros Per Extended Break */}
          <input
            ref={(pomoPerBreak) => { this.pomoPerBreak = pomoPerBreak; }}
            type="text"
            className="validate"
            style={{ display: 'block' }}
            onChange={e => this.updateSetting(e, 'pomoPerBreak')}
            defaultValue={this.state.settings.pomoPerBreak}
          />
          <label htmlFor="pomoPerBreak">Timers Per Extended Break</label>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="Timer">
        <span className="Complete">Complete: {this.state.completed}</span>
        <div className="TimeValue">
          <p>Time Remaining:
            <span>{ this.state.readable}</span>
          </p>
        </div>
        <div className="Controls">
          {this.renderControls()}
          <button onClick={e => this.complete(e)}>Complete</button>
          <button onClick={e => this.onClickReset(e)}>Reset</button>
        </div>
        {this.renderSettings()}
      </div>
    );
  }
}

Timer.propTypes = {
  length: React.PropTypes.number,
  start: React.PropTypes.bool,
  pomoComplete: React.PropTypes.func,
  pomoCompleted: React.PropTypes.number,
};

Timer.defaultProps = {
  length: 1500000,
  start: false,
};

function mapStateToProps(state) {
  return {
    pomoCompleted: state.BreakTrack.pomoComplete,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pomoComplete: () => dispatch(pomoComplete()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
