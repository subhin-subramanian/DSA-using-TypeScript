
# 📅 Day 3 — Prefix Sum & Array Rotation

Welcome to **Day 3** of my Data Structures & Algorithms journey 🚀  
Today focuses on **optimization techniques** that reduce repeated computation and improve performance.

---

## 🎯 Topics Covered

### 1️⃣ Prefix Sum
- Concept of cumulative sums
- Efficient range sum queries
- Time vs space trade-off

### 2️⃣ Array Rotation
- Understanding left vs right rotation
- Brute force vs optimal solution
- Reversal algorithm for in-place rotation

---

## 🧠 Key Learnings

- Preprocessing data can drastically reduce query time
- Prefix Sum converts repeated **O(n)** operations into **O(1)** queries
- Array rotation can be optimized from **O(n × k)** to **O(n)** using reversal
- Importance of modulo operation (`k % n`) to handle large rotations

---

## 🧩 Problems Solved

### ✅ Prefix Sum
- Build prefix sum array
- Answer range sum queries in constant time

### ✅ Array Rotation
- Right rotate an array by `k` steps
- In-place solution using the reversal technique

---

## 🧪 Example

### Prefix Sum

```js
arr = [2, 4, 1, 3, 5]
range(1, 3) → 8
```

### Array Rotation

```js
arr = [1, 2, 3, 4, 5], k = 2
output → [4, 5, 1, 2, 3]
```

### ⏱ Complexity Analysis

| Problem |	Time | Space|
|---------|---------|------------|
|Prefix Sum (build)	|O(n)	|O(n)|
|Range Query	|O(1)	|O(1)|
|Array Rotation	|O(n)	|O(1)|



📌 Problems increase in thinking difficulty, not syntax.

### ⚠️ Common Beginner Mistakes

 - Forgetting k = k % n
 - Using extra arrays when in-place solution exists
 - Recomputing range sums repeatedly instead of preprocessing

## 🏃 Practice Challenge (Follow Along)

Try solving these **without looking at the solution first**:

### 🔹 Prefix Sum Challenges
1. Given an array, answer multiple range sum queries efficiently.
2. Modify prefix sum to find the **sum of even numbers** in a range.
3. Can you compute range sum queries for **negative numbers**?

### 🔹 Array Rotation Challenges
1. Rotate the array **left** by `k` positions.
2. Handle cases where `k` is greater than array length.
3. Rotate the array without using any extra space.

---

### 🧪 Bonus (Optional)
- Implement prefix sum using `reduce`
- Explain why rotation using reversal works (in words)

💡 Tip: Focus on logic first, then code.

### 💡 Pro Tip

Optimize first with thinking, not code.
Patterns like Prefix Sum and Reversal appear frequently in interviews.

⏭️ What’s Next?

Stay consistent. One day at a time 💪. Let's move forward to day 4....

