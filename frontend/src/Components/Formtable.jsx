import React from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import '../../Styles/PBooking.css';

const Formtable = ({handleSubmit,handleOnChange,handleclose,rest}) => {
  return (
    <div className="addContainer">
      <div className='smalladdcontainer'>
            <form onSubmit={handleSubmit}>
              <div className="close-btn" onClick={handleclose}>
              
                <CloseRoundedIcon />
              </div>
              <div className="form-grid">
                <div className="lableinputs">
                  <label htmlFor="bookingNo">Booking No:</label>
                  <input
                    type="text"
                    id="bookingNo"
                    name="bookingNo"
                    onChange={handleOnChange}
                    value={rest.bookingNo}
                  />
                </div>
                <div className="lableinputs">
                  <label htmlFor="division">Division:</label>
                  <input
                    type="text"
                    id="division"
                    name="division"
                    onChange={handleOnChange}
                    value={rest.division}
                  />
                </div>
                <div className="lableinputs"v>
                  <label htmlFor="unit">Unit:</label>
                  <br />
                  <input
                    type="text"
                    id="unit"
                    name="unit"
                    onChange={handleOnChange}
                    value={rest.unit}
                  />
                </div>
                <div className="lableinputs">
                  <label htmlFor="productName">Product Name:</label>
                  <input
                    type="text"
                    id="productName"
                    name="productName"
                    onChange={handleOnChange}
                    value={rest.productName}
                  />
                </div>
                <div className="lableinputs">
                  <label htmlFor="serviceNo">Service No:</label>
                  <input
                    type="text"
                    id="serviceNo"
                    name="serviceNo"
                    onChange={handleOnChange}
                    value={rest.serviceNo}
                  />
                </div>
                <div className="lableinputs">
                  <label htmlFor="ppNumber">PP Number:</label>
                  <input
                    type="text"
                    id="ppNumber"
                    name="ppNumber"
                    onChange={handleOnChange}
                    value={rest.ppNumber}
                  />
                </div>
                <div className="lableinputs">
                  <label htmlFor="date">Date:</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    onChange={handleOnChange}
                    value={rest.date}
                  />
                </div>
                <div className="lableinputsdrop">
                  <label htmlFor="type">Type:</label>
                  <select id="type" name="type" onChange={handleOnChange} value={rest.type}>
                    <option valclassName="lableinputsdrop"ue="single">Single</option>
                    <option value="post-production">Post Production</option>
                    <option value="recording">Recording</option>
                    <option value="live">Live</option>
                  </select>
                </div>  
                <div className="lableinputs">
                  <label htmlFor="location">Location:</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    onChange={handleOnChange}
                    value={rest.location}
                  />
                </div>
                <div className="lableinputs">
                  <label htmlFor="programTitle">Program Title:</label>
                  <input
                    type="text"
                    id="programTitle"
                    name="programTitle"
                    onChange={handleOnChange}
                    value={rest.programTitle}
                  />
                </div>
                <div className="lableinputs">
                  <label htmlFor="episodeNo">Episode No:</label>
                  <input
                    type="number"
                    id="episodeNo"
                    name="episodeNo"
                    onChange={handleOnChange}
                    value={rest.episodeNo}
                  />
                </div>
                <div className="lableinputs">
                  <label htmlFor="programeDuration">Program Duration:</label>
                  <input
                    type="text"
                    id="programeDuration"
                    name="programeDuration"
                    onChange={handleOnChange}
                    value={rest.programeDuration}
                  />
                </div>
                <div className="lableinputs">
                  <label htmlFor="dateOfTelecast">Date of Telecast:</label>
                  <input
                    type="date"
                    id="dateOfTelecast"
                    name="dateOfTelecast"
                    onChange={handleOnChange}
                    value={rest.dateOfTelecast}
                  />
                </div>
                <div className="lableinputs">
                  <label htmlFor="timeOfTelecast">Time of Telecast:</label>
                  <input
                    type="time"
                    id="timeOfTelecast"
                    name="timeOfTelecast"
                    onChange={handleOnChange}
                    value={rest.timeOfTelecast}
                  />
                </div>
                <div className="lableinputsdrop">
                  <label htmlFor="frequencyOfTelecast">
                    Frequency of Telecast:
                  </label>
                  <select id="frequencyOfTelecast" name="frequencyOfTelecast" onChange={handleOnChange} value={rest.frequencyOfTelecast}>
                    <option value="single">Single</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="forNight">For Night</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
                <div className="radiooption">
                  <label htmlFor="scheduleChannel">Schedule Channel:</label>
                  <div>
                    <input
                      type="radio"
                      id="rupawaini"
                      name="scheduleChannel"
                      value="rupawaini"
                      onChange={handleOnChange}
                      checked={rest.scheduleChannel === "rupawaini"}
                    />
                    <label htmlFor="rupawaini">Rupawaini</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="eye"
                      name="scheduleChannel"
                      value="eye"
                      onChange={handleOnChange}
                      checked={rest.scheduleChannel === "eye"}
                    />
                    <label htmlFor="eye">Eye</label>
                  </div>
                </div>
                <div className="lableinputsdrop">
                  <label htmlFor="typeOfBooking">Type of Booking:</label>
                  <select id="typeOfBooking" name="typeOfBooking" onChange={handleOnChange} value={rest.typeOfBooking}>
                    <option valclassName="lableinputsdrop"ue="single">Single</option>
                    <option value="block-Daily">Block-Daily</option>
                    <option value="block-Weekly">Block Weekly</option>
                    <option value="block-Monthly">Block Monthly</option>
                  </select>
                </div>
                <div className="lableinputs">
                  <label htmlFor="equipment">Equipment:</label>
                  <input
                    type="text"
                    id="equipment"
                    name="equipment"
                    onChange={handleOnChange}
                    value={rest.equipment}
                  />
                </div>
                <button className="btn">Submit</button>
              </div>
            </form>
            </div>
          </div>
  )
}

export default Formtable