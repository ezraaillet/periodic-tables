const knex = require("../db/connection");

async function list(date, mobile_number){
    if(date){
        return knex("reservations as r")
        .select("*")
        .where("reservation_date", "=", date)
        // .whereNot({"status": "finished"})
        .orderBy("reservation_time");
    }
    else{
        return knex("reservations as r")
        .select("*")
        // .whereNot({"status": "finished"})
        .orderBy("reservation_date");
    }
}

async function create(reservation){
    return knex("reservations")
        .insert(reservation);
}

module.exports = {
    list,
    create,
}