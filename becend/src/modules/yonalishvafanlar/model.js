import { fetch, fetchAll } from "../../utils/db.js";

const FANLAR = async ({ first_fan, second_fan, userId }) => {
    try {
        return await fetch(`
    update users
    set
        first_fan = $1,
        second_fan = $2
    where user_Id = $3
    returning *
        `, [first_fan, second_fan, userId])
    } catch (error) {
        console.log(error.message);
    }
}

const GET = async ({secondFan}) => {
    try {
        return await fetch(`
        select * from univer where $1 = any(fanlar);
        `, [secondFan])
    } catch (error) {
        console.log(error.message);
    }
}

const FAKULTET = async ({univerId}) => {
    try {
        return await fetch(`
    SELECT * FROM fakultet
    where univer_id = $1
        `, [univerId])
    } catch (error) {
        console.log(error.message);
    }
}

const PUT = async ({univerId, userId}) => {
    try {
        return await fetch( 
       `update users
        set
          yonalish = $1
        where user_Id = $2
        returning *`, [univerId, userId])
    } catch (error) {
        console.log(error.message);
    }
}

const TEST = async ({fan}) => {
    try {
        return await fetchAll(`
        select * from tests where test_owner = $1;
        `, [fan])
    } catch (error) {
        console.log(error.message);
    }
}

const CHECK = async ({testid, testAnswer}) => {
    try {
        return await fetchAll(`
        select * from tests where test_id = $1 and answer = $2;
        `, [testid, testAnswer])
    } catch (error) {
        console.log(error.message);
    }
}

const UNIVER = async ({univerId}) => {
    try {
        return await fetchAll(`
        select univer_name from univer where univer_id = $1
        `, [univerId])
    } catch (error) {
        console.log(error.message);
    }
}

export default {
    FANLAR,
    GET,
    FAKULTET,
    PUT,
    TEST,
    CHECK,
    UNIVER
}