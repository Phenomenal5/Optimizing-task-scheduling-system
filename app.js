/* What You're Aiming For
Description: 

You are developing a lightweight task scheduler for a to-do application. The goal is to create efficient solutions for task management including sorting, filtering by priority, and identifying overlapping tasks while analyzing and improving the time and space complexity of each part.

The project focuses on translating common problem types into effective control structures and data models, and optimizing them through analysis.


Instructions
Instructions:

1.Create a list of tasks, where each task has:

Name
Start time and end time
Priority (e.g., High, Medium, Low)
2.Implement the following features:

Sort tasks by start time (efficiently)
Group tasks by priority using appropriate data structures
Detect overlapping tasks (tasks that run at the same time)
3. Analyze the time and space complexity of each function and optimize where necessary.

4. (Optional): Add a function to estimate memory usage based on number of tasks and data stored.

Hint:

Use objects and arrays to manage data.
For overlapping tasks, consider sorting and comparing intervals  similar to the interval scheduling pattern.
Use hash maps for fast grouping.
Sorting can be done with Array.prototype.sort() using custom compare functions.
Analyze operations using Big O notation. */



// Task Scheduler Implementation

class Task {
    constructor(name, startTime, endTime, priority) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.priority = priority;
    }
}



// Task Scheduler Class
class TaskScheduler {
    constructor() {
        this.tasks = [];
    }

    // Add a task to the scheduler
    addTask(name, startTime, endTime, priority) {
        const task = new Task(name, startTime, endTime, priority);
        this.tasks.push(task);

        // to inspect the added task, we can log it to the console
        console.log(`Added task: ${name} (Start: ${startTime}, End: ${endTime}, Priority: ${priority})`);
    }
    // Time Complexity: O(1) for adding a task to the list.
    // Space Complexity: O(1) for storing a single task, but overall O(n) as the number of tasks grows.

    // Sort tasks by start time
    sortTasksByStartTime() {
        this.tasks.sort((a, b) => a.startTime - b.startTime);
        console.log("Tasks sorted by start time:");


        // to inspect the sorted tasks, we can log them to the console
        this.tasks.forEach(task => {
            console.log(`${task.name} (Start: ${task.startTime}, End: ${task.endTime}, Priority: ${task.priority})`);
        });
    }
    // Time Complexity: O(n log n) due to the sorting algorithm.
    // Space Complexity: O(1) if the sort is in-place, otherwise O(n) if it creates a new array.



    // Group tasks by priority
    groupByPriority() {
        const groups = new Map();
        // Iterate through tasks and group them by priority
        for (const task of this.tasks) {
            // If the priority group doesn't exist, create it
            if (!groups.has(task.priority)) {
                groups.set(task.priority, []);
            }
            groups.get(task.priority).push(task);
        }
        return groups;


        // to inspect the grouped tasks, we can log them to the console
        console.log("Tasks grouped by priority:");
        for (const [priority, tasks] of groups) {
            console.log(`Priority: ${priority}`);
            tasks.forEach(task => {
                console.log(`  ${task.name} (Start: ${task.startTime}, End: ${task.endTime})`);
            });
        }
    }
    // Time Complexity: O(n) for iterating through the tasks once.
    // Space Complexity: O(n) in the worst case if all tasks have different priorities, otherwise O(k) where k is the number of unique priorities.


    // Detect overlapping tasks
    findOverlappingTasks() {
        const sorted = [...this.tasks].sort((a, b) => a.startTime - b.startTime);
        const overlaps = [];

        // Check for overlaps by comparing end time of current task with start time of next task
        for (let i = 0; i < sorted.length - 1; i++) {
            // If the end time of the current task is greater than the start time of the next task, they overlap
            if (sorted[i].endTime > sorted[i + 1].startTime) {
            overlaps.push([sorted[i], sorted[i + 1]]);
            }
        }

        return overlaps;
    }
    // Time Complexity: O(n log n) due to sorting, and O(n) for the single pass to find overlaps, resulting in O(n log n) overall.
    // Space Complexity: O(n) for storing the sorted tasks and overlaps.

    // Estimate memory usage (optional)
    estimateMemoryUsage() {
        const taskSize = 4 * 4; // Assuming each property takes 4 bytes
        return this.tasks.length * taskSize;
    }
    // Time Complexity: O(1) for calculating memory usage based on the number of tasks.
    // Space Complexity: O(1) as it only returns a single value based on the number of tasks.
}






const scheduler = new TaskScheduler();
scheduler.addTask("Task 1", 9, 11, "High");
scheduler.addTask("Task 2", 10, 12, "Medium");
scheduler.addTask("Task 3", 11, 13, "Low");
scheduler.addTask("Task 4", 12, 14, "High");