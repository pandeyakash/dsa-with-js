# 🚀 Namaste DSA Solutions

![Language](https://img.shields.io/badge/Language-JavaScript-yellow?style=flat-square&logo=javascript)
![Problems Solved](https://img.shields.io/badge/Problems%20Solved-0-brightgreen?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/YOUR_USERNAME/namaste-dsa-solutions?style=flat-square)

My solutions and notes while learning **Data Structures & Algorithms** through the
[Namaste DSA](https://namastedev.com) course by **Akshay Saini**.

The goal: build strong problem-solving fundamentals, one problem at a time. 💪

---

## 📌 About This Repository

- ✅ Solutions to problems covered in the course
- 🧠 Short notes on the approach behind each solution
- ⏱️ Time and space complexity for every problem
- 📈 A record of my progress and consistency

---

## 🛠️ Tech Stack

- **Language:** JavaScript
- **Runtime:** Node.js
- **Practice Platforms:** LeetCode, Namaste DSA

---

## 📂 Repository Structure

```
namaste-dsa-solutions/
├── 01-basics/
├── 02-arrays/
├── 03-strings/
├── 04-recursion/
├── 05-sorting/
├── 06-searching/
├── 07-linked-lists/
├── 08-stacks-and-queues/
├── 09-trees/
├── 10-graphs/
├── 11-dynamic-programming/
└── README.md
```

Each problem file follows the naming pattern: `problem-number-problem-name.js`
(e.g. `001-two-sum.js`)

---

## 📊 Progress Tracker

| #  | Topic                  | Problems Solved | Status         |
|----|------------------------|-----------------|----------------|
| 1  | Basics                 | 0               | ⏳ Not Started |
| 2  | Arrays                 | 0               | ⏳ Not Started |
| 3  | Strings                | 0               | ⏳ Not Started |
| 4  | Recursion              | 0               | ⏳ Not Started |
| 5  | Sorting                | 0               | ⏳ Not Started |
| 6  | Searching              | 0               | ⏳ Not Started |
| 7  | Linked Lists           | 0               | ⏳ Not Started |
| 8  | Stacks & Queues        | 0               | ⏳ Not Started |
| 9  | Trees                  | 0               | ⏳ Not Started |
| 10 | Graphs                 | 0               | ⏳ Not Started |
| 11 | Dynamic Programming    | 0               | ⏳ Not Started |

**Legend:** ⏳ Not Started · 🔄 In Progress · ✅ Completed

---

## 📝 Problem Index

| #   | Problem                          | Topic   | Difficulty | Solution                                  |
|-----|----------------------------------|---------|------------|-------------------------------------------|
| 001 | [Two Sum](https://leetcode.com/problems/two-sum/) | Arrays | 🟢 Easy | [JS](./02-arrays/001-two-sum.js) |
| 002 | Problem Name                     | Topic   | 🟡 Medium  | [JS](./path/to/file.js)                   |
| 003 | Problem Name                     | Topic   | 🔴 Hard    | [JS](./path/to/file.js)                   |

---

## 🧩 Solution Format

Every solution file follows this structure:

```javascript
/**
 * Problem: Two Sum
 * Link: https://leetcode.com/problems/two-sum/
 * Difficulty: Easy
 *
 * Approach:
 * Use a hash map to store each number's index. For every element,
 * check if (target - current) already exists in the map.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
  return [];
}

// Test
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
```

---

## ▶️ How to Run

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/namaste-dsa-solutions.git

# Move into the folder
cd namaste-dsa-solutions

# Run any solution
node 02-arrays/001-two-sum.js
```

---

## 💡 Key Learnings

> Add insights here as you go, for example:

- Two-pointer technique works great on sorted arrays.
- Always think about edge cases: empty input, single element, duplicates.
- Draw the recursion tree before writing recursive code.

---

## 🙏 Acknowledgements

- **Akshay Saini** and the [NamasteDev](https://namastedev.com) team for the amazing course
- [LeetCode](https://leetcode.com) for the practice problems

---

## 🤝 Connect With Me

- **GitHub:** [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- **LinkedIn:** [Your Name](https://linkedin.com/in/YOUR_PROFILE)
- **LeetCode:** [YOUR_USERNAME](https://leetcode.com/YOUR_USERNAME)

---

⭐ If you find this repository helpful, consider giving it a star!