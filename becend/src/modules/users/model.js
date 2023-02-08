import { fetch, fetchAll } from "../../utils/db.js";

const POST = async ({ fullName, emailOrPhone, username, viloyat, password, gender }) => {
    try {
        return await fetch(`INSERT INTO users(full_name, email_or_phone, username, viloyat, password,  gender) VALUES($1,$2,$3,$4,$5,$6) returning *`, [fullName, emailOrPhone, username, viloyat, password, gender])
    } catch (error) {
        console.log(error.message);
    }
}


export default {
    POST
}