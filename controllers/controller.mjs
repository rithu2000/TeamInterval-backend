import Task from "../models/taskModel.mjs";

// Show task
export const getTask = async (req, res) => {
  try {
    const { priority } = req.query;
    let whereCondition = {};
    if (priority && priority !== 'all') {
      whereCondition.priority = priority;
    }

    const tasks = await Task.findAll({
      where: whereCondition,
      order: [['added_date_time', 'ASC']]
    });
    console.log(tasks, 'rithu');

    return res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Add a new task.
export const addTask = async (req, res) => {
  try {
    const { heading, description, date, time, priority } = req.body;
    const addedDateTime = new Date();

    const task = await Task.create({
      heading,
      description,
      date,
      time,
      image:req.file.filename,
      priority,
      added_date_time: addedDateTime,
    });

    console.log('Task added successfully');

    return res.status(200).json({ message: 'Task added successfully', task });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Edit a task by ID.
export const editTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const image = req.file
    console.log(req.file);
    const { heading, description, date, time, priority } = req.body;

    const task = await Task.findByPk(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    task.heading = heading;
    task.description = description;
    task.date = date;
    task.time = time;
    task.image = image.filename;
    task.priority = priority;

    await task.save();

    return res.status(200).json({ message: 'Task updated successfully', task });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Delete a task by ID.
export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    const task = await Task.findByPk(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    await task.destroy();

    return res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single task by ID.
export const singleTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    const task = await Task.findByPk(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    return res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};