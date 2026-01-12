# 📅 Day 4 — Two Pointers Pattern

Welcome to **Day 4** of my Data Structures & Algorithms journey 🚀  
Today focuses on one of the **most important and frequently asked patterns** in coding interviews — **Two Pointers**.

---

## 🎯 Topics Covered

### 1️⃣ Two Pointers Technique
- Using two indices to reduce unnecessary loops
- Optimizing problems from O(n²) to O(n)
- Handling sorted and unsorted arrays

---

## 🧠 What is the Two Pointers Pattern?

The **Two Pointers** technique uses **two indices** (usually `left` and `right`) that move toward each other or in the same direction to solve problems efficiently.

### Common Use Cases
- Sorted arrays
- Pair problems
- Reversal problems
- Palindromes
- Merging arrays

---

## 🧩 Problems Solved

### ✅ 1. Pair Sum (Two Sum in Sorted Array)

Check if a pair exists with a given sum.

```js
arr = [1, 2, 3, 4, 6], target = 6
Output → true (2 + 4)
```

### ✅ 2. Check Palindrome

Determine whether a string is a palindrome.

```js
Input:  "racecar"
Output: true
```

### ✅ 3. Duplicates

Count the no. of duplicate elements in an array, return the array after 
removing the duplicates

```js
Input:  [1,1,2,2,3]
Output: 2,[1,2,3]
```

### ✅ 4. String reversal

Reverse a given string without creating a newone

```js
Input:  "capgemini"
Output: "inimegpac"
```

## 🧠 Key Learnings

 - Two pointers eliminate unnecessary nested loops
 - Works best when data is sorted
 - Helps reduce time complexity significantly
 - Clear pointer movement logic is crucial

## ⏱ Complexity Analysis


| Problem |	Time | Space|
|---------|---------|------------|
|pair sum(sorted)	|O(n)	|O(1)|
|Palindrome Check	|O(n)	|O(1)|
|Duplicates 	    |O(n)	|O(1)|
|String reversal    |O(n)   |O(n)|

## ⚠️ Common Beginner Mistakes

 - Forgetting to move pointers correctly
 - Using nested loops instead of pointers
 - Applying two pointers on unsorted data without preprocessing

## 🏃 Practice Challenge (Follow Along)

Try solving these before checking solutions:

### 🔹 Beginner

 - Reverse a string using two pointers
 - Check if a string is a palindrome ignoring spaces

### 🔹 Intermediate

 - Find a pair with a given sum in a sorted array
 - Remove duplicates from a sorted array (in-place)

### 🔹 Bonus

 - Apply two pointers to find the middle of a linked list
 - Explain why two pointers reduce time complexity

### 💡 Pro Tip

Two pointers is not about code — it’s about movement logic.
If you can explain pointer movement clearly, you can solve most problems.

⏭️ What’s Next?

Consistency beats intensity 💪. Let's move to day 5