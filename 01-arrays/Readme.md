# 01 – Arrays 📦

Arrays are the **starting point of DSA**.  
If you master arrays, **50–60% of DSA problems** become much easier.

This folder focuses on **thinking in terms of indices, ranges, and patterns**.

---

## 🎯 Goal of This Section

By the end of this folder, you should be able to:
- Traverse arrays confidently
- Be comfortable with traversal
- Understand how indices work
- Apply common array patterns
- Analyze time & space complexity
- Solve most **easy → medium** array problems

📌 **Do not rush this section.**  
Arrays build the base for strings, matrices, and DP.

---

## 🧠 Core Concepts to Learn

### 1️⃣ Array Traversal
Understanding how to move through an array.

```ts
for (let i = 0; i < arr.length; i++) {
  // access arr[i]
}
```

### 2️⃣ Prefix Sum (VERY IMPORTANT 🔥)

Prefix sum helps answer:

- Running sum problems
- Range sum queries
- Subarray problems

Example:

``` runningSum[i] = runningSum[i - 1] + nums[i] ```

Once you understand this, many problems become trivial.

### 3️⃣ In-place vs Extra Space

- In-place → modify input array
- Extra space → create new array

Understanding this helps you:
- Optimize space
- Answer interview follow-ups correctly

### 4️⃣ Common Array Patterns

You’ll repeatedly see these patterns:

| Pattern |	Use Case |
|---------|--------|
| Prefix Sum |	Cumulative calculations |
| Two Pointer |	Left + right traversal |
| Sliding Window |	Subarray problems |
| Hashing |	Fast lookup |
| Sorting |	Order-based logic |

### 📂 Problems Covered in This Folder

| Problem |	Concept | Difficulty |
|---------|---------|------------|
|Running Sum of 1D Array | Prefix Sum | Easy |
|Sum of Elements | Traversal | Easy |
|Concatenation of Array | In-place modification | Easy |
|Two Sum | Hashing | Easy |

📌 Problems increase in thinking difficulty, not syntax.

### 🧪 How to Practice (IMPORTANT)

**Step-by-step approach:**
1. Read the problem statement
2. Write brute-force solution
3. Analyze time & space
4. Optimize if possible
5. Implement clean solution
6. Test with edge cases

### ⚠️ Common Beginner Mistakes

❌ Forgetting edge cases ([], single element)
❌ Using nested loops unnecessarily
❌ Ignoring space complexity
❌ Logging instead of returning values

### 🧠 Think Before You Code

- Before writing code, always ask:
- What is the input size?
- Can I reuse previous results?
- Can I modify the array in place?
- Is there a pattern?

### 🏃 Practice Challenge (Follow Along)

Try this on your own:

- Reverse an array in place
- Find the maximum element
- Check if array is sorted
- Find sum of subarray

📌 Solve them before checking solutions online.

### 💡 Pro Tip

If you can explain an array solution,without touching the keyboard, you truly understand it.

⏭️ What’s Next?

Once comfortable with arrays:
➡️ Move to 02-strings