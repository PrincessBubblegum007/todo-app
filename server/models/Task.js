import { pool } from '../helpers/db.js';

const SelectAllTasks = async () => {
    return pool.query('select * from task');
}

const InsertTask = async (description) => {
    return pool.query('insert into task (description) values ($1) returning *', [description]);
}

const DeleteTask = async (id) => {
    return pool.query('delete from task where id = $1', [id]);
}

export { SelectAllTasks, InsertTask, DeleteTask };