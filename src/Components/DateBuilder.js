import React from 'react'

const DateBuilder = () => {
    let d = new Date()
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return (
        <div className="date">
            {days[d.getDay()]} {d.getDate()} {months[d.getMonth()]} {d.getFullYear()}
        </div>
    )
  }

export default DateBuilder