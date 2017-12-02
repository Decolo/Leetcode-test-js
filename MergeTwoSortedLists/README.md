### Desciption: ###

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists

### Example: ###
```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```

### Recursive: ###

1. Check the edge cases. If either l1 or l2 was null, return non-null list.
2. Judge which of l1 or l2 was the smaller one. Recursively set l1/l2's next value point to next merge's result,
meanwhile return l1/l2. The recursion will stop util one argument of recursive function becoming null.


### Iteration: ###
1. Set a head and pre as pointers. Head will be a node whose val is -1
2. Every Step of Iteration, there are two list waiting for compare. The pointer pre will point to the smaller node.
And one of the two lists will start from the smaller node's next to generate a new list for next ineration.