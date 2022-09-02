import React from "react";

/**
 * Returns the date of the current day.
 * 
 * @returns {string} the date of the current day
 */
export default function getDate() {

    let now = new Date().toLocaleDateString('fr-FR', { weekday:"long", month:"long", day:"numeric", year: 'numeric'});

    return (
        <div className="getDate">
            <h1>Date: {now}</h1>
        </div>
    );
}