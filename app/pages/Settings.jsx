// Absolute Dependencies
 import React from 'react';
 // Relative Dependencies
 import parseMillisecondsIntoReadableTime from '../api/TimeUtility';

 // Variable Declarations

 class Settings extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       shown: false,
       timerLength: 1500000, // 25 minutes
       breakLength: 300000, // 5 minutes
       timerPerBreak: 4, // Default Timer
       extendedBreakLength: 1800000, // 30 minutes
     };
   }
   render() {
     return (
       <div className="Settings">
         <p>Timer Settings</p>
         <div className="input-field"> {/* Timer Length */}
           <input
             ref={(timerLength) => { this.timerLength = timerLength; }}
             type="text"
             className="validate"
             style={{ display: 'block' }}
             onChange={e => this.updateSetting(e, 'timerLength')}
             defaultValue={this.state.timerLength}
           />
           <label htmlFor="timerLength">Timer Length(
             {parseMillisecondsIntoReadableTime(this.state.timerLength)}
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
             defaultValue={this.state.breakLength}
           />
           <label htmlFor="timerLength">Break Length(
             {parseMillisecondsIntoReadableTime(this.state.breakLength)}
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
             defaultValue={this.state.extendedBreakLength}
           />
           <label htmlFor="timerLength">Extended Break Length(
             {parseMillisecondsIntoReadableTime(this.state.extendedBreakLength)}
           )</label>
         </div>
         <br />
         <div className="input-field"> {/* Timers Per Extended Break */}
           <input
             ref={(timerPerBreak) => { this.timerPerBreak = timerPerBreak; }}
             type="text"
             className="validate"
             style={{ display: 'block' }}
             onChange={e => this.updateSetting(e, 'timerPerBreak')}
             defaultValue={this.state.timerPerBreak}
           />
           <label htmlFor="timerPerBreak">Timers Per Extended Break</label>
         </div>
       </div>
     );
   }
 }

 Settings.propTypes = {

 };

 Settings.defaultProps = {

 };

 export default Settings;
