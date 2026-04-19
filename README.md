# Optimizing Task Scheduling System

## Description

This project implements a lightweight task scheduler for a to-do application. It provides efficient solutions for task management, including sorting tasks by start time, grouping tasks by priority, and detecting overlapping tasks. The implementation focuses on optimizing time and space complexity while using appropriate data structures and algorithms.

The project demonstrates the translation of common problem types into effective control structures and data models, with a strong emphasis on performance analysis using Big O notation.

## Features

- **Task Management**: Create tasks with name, start time, end time, and priority (High, Medium, Low).
- **Sorting by Start Time**: Efficiently sort tasks based on their start times.
- **Grouping by Priority**: Group tasks using a hash map (Map) for fast categorization by priority.
- **Overlap Detection**: Identify tasks that overlap in time using interval scheduling patterns.
- **Memory Estimation**: Optional function to estimate memory usage based on the number of tasks.

## Installation and Usage

This is a Node.js application. To run the scheduler:

1. Ensure you have Node.js installed.
2. Clone the repository and navigate to the project directory.
3. Run the application:

```bash
node app.js
```

The `app.js` file includes a demo that adds sample tasks and demonstrates the features.

### Example Usage

```javascript
const scheduler = new TaskScheduler();

// Add tasks
scheduler.addTask("Task 1", 9, 11, "High");
scheduler.addTask("Task 2", 10, 12, "Medium");
scheduler.addTask("Task 3", 11, 13, "Low");

// Sort by start time
scheduler.sortTasksByStartTime();

// Group by priority
const groups = scheduler.groupByPriority();

// Find overlapping tasks
const overlaps = scheduler.findOverlappingTasks();

// Estimate memory usage
const memory = scheduler.estimateMemoryUsage();
```

## Complexity Analysis

### addTask
- **Time Complexity**: O(1) - Adding a task to the array is constant time.
- **Space Complexity**: O(1) per task - Each task object uses fixed space.

### sortTasksByStartTime
- **Time Complexity**: O(n log n) - Uses JavaScript's Array.sort(), which is typically O(n log n).
- **Space Complexity**: O(1) - In-place sorting.

### groupByPriority
- **Time Complexity**: O(n) - Single pass through all tasks.
- **Space Complexity**: O(n) - Worst case when all tasks have unique priorities; otherwise O(k) where k is the number of unique priorities.

### findOverlappingTasks
- **Time Complexity**: O(n log n) - Dominated by the sorting step, followed by O(n) linear scan.
- **Space Complexity**: O(n) - For the sorted copy and overlap array.

### estimateMemoryUsage
- **Time Complexity**: O(1) - Simple calculation based on task count.
- **Space Complexity**: O(1) - Returns a single number.

## Data Structures Used

- **Arrays**: For storing the list of tasks.
- **Objects**: For representing individual tasks.
- **Map**: For efficient grouping by priority (hash map for O(1) lookups).

## Optimizations

- Sorting is performed in-place where possible to minimize space usage.
- Overlap detection uses a sorted array and single pass for efficiency.
- Hash maps ensure fast grouping operations.

## Contributing

Feel free to submit issues or pull requests for improvements or additional features.

## License

This project is open-source. Please refer to the license file for details.