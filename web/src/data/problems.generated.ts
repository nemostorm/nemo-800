export type Difficulty = 'Easy' | 'Medium' | 'Hard'

export type ProblemSection = 'List' | 'Set' | 'Dictionary' | 'Text File'

export type Problem = {
  id: string
  prefix: string
  section: ProblemSection
  difficulty: Difficulty
  topic: string
  prompt: string
}

export const PROBLEMS: Problem[] = [
  {
    "id": "L001",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Traversal",
    "prompt": "Find the sum of all numbers in a list without using sum()."
  },
  {
    "id": "L002",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Traversal",
    "prompt": "Find the largest value in a list without using max()."
  },
  {
    "id": "L003",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Traversal",
    "prompt": "Find the smallest value in a list without using min()."
  },
  {
    "id": "L004",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Selection",
    "prompt": "Return the second-largest distinct value in a list."
  },
  {
    "id": "L005",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Selection",
    "prompt": "Return the second-smallest distinct value in a list."
  },
  {
    "id": "L006",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Deduplication",
    "prompt": "Remove duplicates while preserving original order."
  },
  {
    "id": "L007",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Rotation",
    "prompt": "Rotate a list to the right by k positions."
  },
  {
    "id": "L008",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Rotation",
    "prompt": "Rotate a list to the left by k positions."
  },
  {
    "id": "L009",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Reversal",
    "prompt": "Reverse a list manually using a loop."
  },
  {
    "id": "L010",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Validation",
    "prompt": "Check whether a list is sorted in ascending order."
  },
  {
    "id": "L011",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Counting",
    "prompt": "Count how many times each element appears in a list."
  },
  {
    "id": "L012",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Statistics",
    "prompt": "Find the mode of a list of integers."
  },
  {
    "id": "L013",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Statistics",
    "prompt": "Compute the median for odd and even-length lists."
  },
  {
    "id": "L014",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Statistics",
    "prompt": "Compute average and count numbers above average."
  },
  {
    "id": "L015",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Partition",
    "prompt": "Split a list into positives, negatives, and zeros."
  },
  {
    "id": "L016",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Reordering",
    "prompt": "Move all zeros to the end while keeping order."
  },
  {
    "id": "L017",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Merge",
    "prompt": "Merge two sorted lists into one sorted list."
  },
  {
    "id": "L018",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Comparison",
    "prompt": "Find intersection of two lists including duplicates."
  },
  {
    "id": "L019",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Comparison",
    "prompt": "Return elements in list A not present in list B."
  },
  {
    "id": "L020",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Chunking",
    "prompt": "Split a list into chunks of size n."
  },
  {
    "id": "L021",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Nested",
    "prompt": "Flatten a one-level nested list."
  },
  {
    "id": "L022",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Nested",
    "prompt": "Flatten an arbitrarily nested list recursively."
  },
  {
    "id": "L023",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Matrix",
    "prompt": "Transpose a matrix represented as a list of lists."
  },
  {
    "id": "L024",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Matrix",
    "prompt": "Compute the sum of both diagonals of a square matrix."
  },
  {
    "id": "L025",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Matrix",
    "prompt": "Find the row with the largest sum in a matrix."
  },
  {
    "id": "L026",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Subsequence",
    "prompt": "Find length of longest increasing contiguous run."
  },
  {
    "id": "L027",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Prefix",
    "prompt": "Build a running-sum list."
  },
  {
    "id": "L028",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Prefix",
    "prompt": "Build a prefix-maximum list."
  },
  {
    "id": "L029",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Suffix",
    "prompt": "Build a suffix-minimum list."
  },
  {
    "id": "L030",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Pairwise",
    "prompt": "Return differences between consecutive elements."
  },
  {
    "id": "L031",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Search",
    "prompt": "Return indices of two numbers that add to target."
  },
  {
    "id": "L032",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Search",
    "prompt": "Find unique triplets whose sum is zero."
  },
  {
    "id": "L033",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Search",
    "prompt": "List all pairs that add to target."
  },
  {
    "id": "L034",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Frequency",
    "prompt": "Find the first non-repeating element."
  },
  {
    "id": "L035",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Selection",
    "prompt": "Find the kth largest element without full sort."
  },
  {
    "id": "L036",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Frequency",
    "prompt": "Return the top k most frequent elements."
  },
  {
    "id": "L037",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Array",
    "prompt": "Find the smallest missing positive integer."
  },
  {
    "id": "L038",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Voting",
    "prompt": "Find element appearing more than n/2 times."
  },
  {
    "id": "L039",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Voting",
    "prompt": "Find all elements appearing more than n/3 times."
  },
  {
    "id": "L040",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Products",
    "prompt": "Compute product of array except self."
  },
  {
    "id": "L041",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Partition",
    "prompt": "Partition a list around a pivot value."
  },
  {
    "id": "L042",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Selection",
    "prompt": "Implement quickselect for kth smallest element."
  },
  {
    "id": "L043",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Sorting",
    "prompt": "Implement bubble sort."
  },
  {
    "id": "L044",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Sorting",
    "prompt": "Implement insertion sort."
  },
  {
    "id": "L045",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Sorting",
    "prompt": "Implement selection sort."
  },
  {
    "id": "L046",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Sorting",
    "prompt": "Implement merge sort."
  },
  {
    "id": "L047",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Sorting",
    "prompt": "Implement quicksort."
  },
  {
    "id": "L048",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Binary Search",
    "prompt": "Search for a value in a sorted list."
  },
  {
    "id": "L049",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Inversions",
    "prompt": "Count inversions in a list."
  },
  {
    "id": "L050",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Permutation",
    "prompt": "Check if two lists are permutations of each other."
  },
  {
    "id": "L051",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Validation",
    "prompt": "Check if a list reads the same forward and backward."
  },
  {
    "id": "L052",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Sequence",
    "prompt": "Find longest consecutive-integer sequence length."
  },
  {
    "id": "L053",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Subarray",
    "prompt": "Find maximum subarray sum (Kadane's algorithm)."
  },
  {
    "id": "L054",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Subarray",
    "prompt": "Find minimum subarray sum."
  },
  {
    "id": "L055",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Window",
    "prompt": "Find the shortest subarray with sum at least target."
  },
  {
    "id": "L056",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Enumeration",
    "prompt": "Count total number of subarrays."
  },
  {
    "id": "L057",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Window",
    "prompt": "Compute max in each sliding window of size k."
  },
  {
    "id": "L058",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Window",
    "prompt": "Compute moving average for window size k."
  },
  {
    "id": "L059",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Window",
    "prompt": "Count distinct elements in each window of size k."
  },
  {
    "id": "L060",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Stack",
    "prompt": "Validate parentheses given as a list of characters."
  },
  {
    "id": "L061",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Conversion",
    "prompt": "Convert a list of digits to an integer."
  },
  {
    "id": "L062",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Conversion",
    "prompt": "Convert an integer to a list of digits."
  },
  {
    "id": "L063",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Arithmetic",
    "prompt": "Add two numbers stored as reversed digit lists."
  },
  {
    "id": "L064",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Arithmetic",
    "prompt": "Multiply two big integers represented as digit lists."
  },
  {
    "id": "L065",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Parsing",
    "prompt": "Convert list of strings to ints, skipping invalid values."
  },
  {
    "id": "L066",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Duplicates",
    "prompt": "Detect duplicates within distance k."
  },
  {
    "id": "L067",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Random",
    "prompt": "Shuffle a list using a provided random seed."
  },
  {
    "id": "L068",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Sampling",
    "prompt": "Sample n items without replacement."
  },
  {
    "id": "L069",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Random",
    "prompt": "Generate a random permutation using Fisher-Yates."
  },
  {
    "id": "L070",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Partition",
    "prompt": "Stably partition list into evens then odds."
  },
  {
    "id": "L071",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Custom Sort",
    "prompt": "Reorder items using a custom priority map."
  },
  {
    "id": "L072",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Strings",
    "prompt": "Group anagrams from a list of words."
  },
  {
    "id": "L073",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Strings",
    "prompt": "Sort strings by length, then alphabetically."
  },
  {
    "id": "L074",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Intervals",
    "prompt": "Merge overlapping intervals."
  },
  {
    "id": "L075",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Intervals",
    "prompt": "Insert an interval into sorted non-overlapping intervals."
  },
  {
    "id": "L076",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Intervals",
    "prompt": "Compute minimum meeting rooms needed."
  },
  {
    "id": "L077",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Intervals",
    "prompt": "Find all overlap intervals between two schedules."
  },
  {
    "id": "L078",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Compression",
    "prompt": "Run-length encode a list."
  },
  {
    "id": "L079",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Compression",
    "prompt": "Decode a run-length encoded list."
  },
  {
    "id": "L080",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Mutation",
    "prompt": "Remove all occurrences of a value in place."
  },
  {
    "id": "L081",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Histogram",
    "prompt": "Build histogram buckets from numeric ranges."
  },
  {
    "id": "L082",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Ranking",
    "prompt": "Assign ranks to elements with ties."
  },
  {
    "id": "L083",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Normalization",
    "prompt": "Scale values to the range [0, 1]."
  },
  {
    "id": "L084",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Normalization",
    "prompt": "Compute z-scores for a numeric list."
  },
  {
    "id": "L085",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Outliers",
    "prompt": "Detect outliers using IQR rule."
  },
  {
    "id": "L086",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Statistics",
    "prompt": "Compute the pth percentile."
  },
  {
    "id": "L087",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Statistics",
    "prompt": "Compute weighted average from (value, weight) pairs."
  },
  {
    "id": "L088",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Distribution",
    "prompt": "Build cumulative distribution values."
  },
  {
    "id": "L089",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Linear Algebra",
    "prompt": "Dot product of sparse vectors as (index, value) lists."
  },
  {
    "id": "L090",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Matrix",
    "prompt": "Multiply two matrices represented as lists of lists."
  },
  {
    "id": "L091",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Parsing",
    "prompt": "Parse CSV fields from a list of token fragments."
  },
  {
    "id": "L092",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Validation",
    "prompt": "Validate Sudoku rows, columns, and boxes from lists."
  },
  {
    "id": "L093",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Matrix",
    "prompt": "Return matrix elements in spiral order."
  },
  {
    "id": "L094",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Matrix",
    "prompt": "Rotate a square matrix by 90 degrees clockwise."
  },
  {
    "id": "L095",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Search",
    "prompt": "Search target in a rotated sorted array."
  },
  {
    "id": "L096",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Search",
    "prompt": "Find a peak element index."
  },
  {
    "id": "L097",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Stack",
    "prompt": "Compute trapped rainwater from elevation heights."
  },
  {
    "id": "L098",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Stack",
    "prompt": "For each day, find next warmer temperature distance."
  },
  {
    "id": "L099",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Simulation",
    "prompt": "Simulate asteroid collisions."
  },
  {
    "id": "L100",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Design",
    "prompt": "Build a simple to-do manager using list operations."
  },
  {
    "id": "L101",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Traversal",
    "prompt": "Count even and odd numbers in one pass."
  },
  {
    "id": "L102",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Traversal",
    "prompt": "Find the first element greater than a threshold."
  },
  {
    "id": "L103",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Validation",
    "prompt": "Check if all elements are numeric."
  },
  {
    "id": "L104",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Validation",
    "prompt": "Check if list contains only unique strings."
  },
  {
    "id": "L105",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Indexing",
    "prompt": "Return all indices of a target value."
  },
  {
    "id": "L106",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Selection",
    "prompt": "Find third-largest distinct element."
  },
  {
    "id": "L107",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Selection",
    "prompt": "Find third-smallest distinct element."
  },
  {
    "id": "L108",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Merge",
    "prompt": "Interleave two lists of equal length."
  },
  {
    "id": "L109",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Merge",
    "prompt": "Interleave two lists of different lengths."
  },
  {
    "id": "L110",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Mutation",
    "prompt": "Remove negatives from a list in place."
  },
  {
    "id": "L111",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Filtering",
    "prompt": "Keep only prime numbers from a list."
  },
  {
    "id": "L112",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Filtering",
    "prompt": "Keep only palindromic strings."
  },
  {
    "id": "L113",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Transformation",
    "prompt": "Square all values in a list."
  },
  {
    "id": "L114",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Transformation",
    "prompt": "Capitalize first letter of each word in a list."
  },
  {
    "id": "L115",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Counting",
    "prompt": "Count vowels in a list of strings."
  },
  {
    "id": "L116",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Counting",
    "prompt": "Count local peaks in a numeric list."
  },
  {
    "id": "L117",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Counting",
    "prompt": "Count local valleys in a numeric list."
  },
  {
    "id": "L118",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Boundary",
    "prompt": "Find first index where order is violated."
  },
  {
    "id": "L119",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Boundary",
    "prompt": "Trim leading and trailing zeros from list."
  },
  {
    "id": "L120",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Compression",
    "prompt": "Remove consecutive duplicates only."
  },
  {
    "id": "L121",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Grouping",
    "prompt": "Group consecutive equal elements into runs."
  },
  {
    "id": "L122",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Grouping",
    "prompt": "Convert run groups back to flat list."
  },
  {
    "id": "L123",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Partition",
    "prompt": "Split list by predicate into two lists."
  },
  {
    "id": "L124",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Partition",
    "prompt": "Three-way partition (less, equal, greater) by pivot."
  },
  {
    "id": "L125",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Sequence",
    "prompt": "Longest non-decreasing contiguous subarray length."
  },
  {
    "id": "L126",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Sequence",
    "prompt": "Longest strictly decreasing contiguous subarray length."
  },
  {
    "id": "L127",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Sequence",
    "prompt": "Find all starting indices of monotonic runs."
  },
  {
    "id": "L128",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Window",
    "prompt": "Maximum average subarray of size k."
  },
  {
    "id": "L129",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Window",
    "prompt": "Minimum average subarray of size k."
  },
  {
    "id": "L130",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Window",
    "prompt": "Count windows where max - min <= limit."
  },
  {
    "id": "L131",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Window",
    "prompt": "Longest subarray with sum <= target."
  },
  {
    "id": "L132",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Window",
    "prompt": "Count subarrays with exact sum target."
  },
  {
    "id": "L133",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Prefix",
    "prompt": "Count subarrays divisible by k."
  },
  {
    "id": "L134",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Prefix",
    "prompt": "Longest subarray with equal zeros and ones."
  },
  {
    "id": "L135",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Prefix",
    "prompt": "Longest subarray with sum exactly k."
  },
  {
    "id": "L136",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Map",
    "prompt": "Find all duplicate values and their frequencies."
  },
  {
    "id": "L137",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Map",
    "prompt": "Return values appearing exactly twice."
  },
  {
    "id": "L138",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Map",
    "prompt": "Return values appearing at least k times."
  },
  {
    "id": "L139",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Map",
    "prompt": "Stable sort by frequency then value."
  },
  {
    "id": "L140",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Custom Sort",
    "prompt": "Sort by absolute value then original sign."
  },
  {
    "id": "L141",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Stack",
    "prompt": "Compute next greater element for each position."
  },
  {
    "id": "L142",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Stack",
    "prompt": "Compute next smaller element for each position."
  },
  {
    "id": "L143",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Stack",
    "prompt": "Compute previous greater element for each position."
  },
  {
    "id": "L144",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Stack",
    "prompt": "Compute previous smaller element for each position."
  },
  {
    "id": "L145",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Stack",
    "prompt": "Largest rectangle in histogram heights."
  },
  {
    "id": "L146",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Stack",
    "prompt": "Sum of subarray minimums."
  },
  {
    "id": "L147",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Stack",
    "prompt": "Sum of subarray maximums."
  },
  {
    "id": "L148",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Deque",
    "prompt": "Shortest subarray with sum at least k (with negatives)."
  },
  {
    "id": "L149",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Deque",
    "prompt": "Sliding window minimum for size k."
  },
  {
    "id": "L150",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Deque",
    "prompt": "First negative number in each window."
  },
  {
    "id": "L151",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Intervals",
    "prompt": "Remove intervals fully covered by another interval."
  },
  {
    "id": "L152",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Intervals",
    "prompt": "Count non-overlapping intervals after optimal removals."
  },
  {
    "id": "L153",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Intervals",
    "prompt": "Find gaps between merged intervals."
  },
  {
    "id": "L154",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Intervals",
    "prompt": "Compute total covered length of intervals."
  },
  {
    "id": "L155",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Intervals",
    "prompt": "Minimum arrows to burst balloon intervals."
  },
  {
    "id": "L156",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Greedy",
    "prompt": "Rearrange list to alternate positive and negative."
  },
  {
    "id": "L157",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Greedy",
    "prompt": "Reorder by parity index constraints."
  },
  {
    "id": "L158",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Greedy",
    "prompt": "Minimize max pair sum by pairing extremes."
  },
  {
    "id": "L159",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Greedy",
    "prompt": "Form largest number by arranging integer list."
  },
  {
    "id": "L160",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Greedy",
    "prompt": "Schedule tasks with cooldown from task list."
  },
  {
    "id": "L161",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Search",
    "prompt": "Find first and last occurrence in sorted list."
  },
  {
    "id": "L162",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Search",
    "prompt": "Count occurrences of target in sorted list."
  },
  {
    "id": "L163",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Search",
    "prompt": "Find insertion position for target."
  },
  {
    "id": "L164",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Search",
    "prompt": "Find floor and ceil values for target."
  },
  {
    "id": "L165",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Search",
    "prompt": "Find rotation count in rotated sorted list."
  },
  {
    "id": "L166",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Search",
    "prompt": "Find minimum element in rotated sorted list."
  },
  {
    "id": "L167",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Search",
    "prompt": "Median of two sorted lists."
  },
  {
    "id": "L168",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Bitwise",
    "prompt": "Find single number when others appear twice."
  },
  {
    "id": "L169",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Bitwise",
    "prompt": "Find single number when others appear three times."
  },
  {
    "id": "L170",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Bitwise",
    "prompt": "Find two unique numbers when others appear twice."
  },
  {
    "id": "L171",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "String List",
    "prompt": "Remove empty strings from list of strings."
  },
  {
    "id": "L172",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "String List",
    "prompt": "Sort strings case-insensitively."
  },
  {
    "id": "L173",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "String List",
    "prompt": "Group strings by first two characters."
  },
  {
    "id": "L174",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "String List",
    "prompt": "Find longest common prefix of string list."
  },
  {
    "id": "L175",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "String List",
    "prompt": "Find shortest unique prefix for each string."
  },
  {
    "id": "L176",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "String List",
    "prompt": "Remove near-duplicates by case-insensitive compare."
  },
  {
    "id": "L177",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "String List",
    "prompt": "Sort strings by vowel count."
  },
  {
    "id": "L178",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "String List",
    "prompt": "Build autocomplete suggestions from prefix list."
  },
  {
    "id": "L179",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Parsing",
    "prompt": "Parse log lines and extract status codes into list."
  },
  {
    "id": "L180",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Parsing",
    "prompt": "Parse timestamps and sort events by time."
  },
  {
    "id": "L181",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Matrix",
    "prompt": "Set matrix rows and columns to zero if any cell is zero."
  },
  {
    "id": "L182",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Matrix",
    "prompt": "Count islands in binary grid using list-based traversal."
  },
  {
    "id": "L183",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Matrix",
    "prompt": "Find perimeter of island in grid."
  },
  {
    "id": "L184",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Matrix",
    "prompt": "Count connected components in adjacency matrix."
  },
  {
    "id": "L185",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Matrix",
    "prompt": "Compute shortest path in grid with obstacles."
  },
  {
    "id": "L186",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Matrix",
    "prompt": "Flood fill from a start cell."
  },
  {
    "id": "L187",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Matrix",
    "prompt": "Find largest connected region of ones."
  },
  {
    "id": "L188",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Matrix",
    "prompt": "Validate Toeplitz matrix property."
  },
  {
    "id": "L189",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Matrix",
    "prompt": "Count negative numbers in sorted matrix."
  },
  {
    "id": "L190",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Matrix",
    "prompt": "Find kth smallest in sorted matrix."
  },
  {
    "id": "L191",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Simulation",
    "prompt": "Simulate queue using two lists."
  },
  {
    "id": "L192",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Simulation",
    "prompt": "Simulate browser history with back/forward lists."
  },
  {
    "id": "L193",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Simulation",
    "prompt": "Simulate inventory expiration by day."
  },
  {
    "id": "L194",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Simulation",
    "prompt": "Simulate CPU round-robin from process list."
  },
  {
    "id": "L195",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Simulation",
    "prompt": "Simulate multi-level feedback queue scheduling."
  },
  {
    "id": "L196",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Randomized",
    "prompt": "Weighted random pick from weight list."
  },
  {
    "id": "L197",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Randomized",
    "prompt": "Reservoir sampling from streaming list."
  },
  {
    "id": "L198",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Randomized",
    "prompt": "Shuffle blacklist approach for random picks."
  },
  {
    "id": "L199",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Design",
    "prompt": "Implement min-stack using list storage."
  },
  {
    "id": "L200",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "Design",
    "prompt": "Implement queue-with-max using lists/deque."
  },
  {
    "id": "L201",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "DP",
    "prompt": "Longest increasing subsequence length."
  },
  {
    "id": "L202",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "DP",
    "prompt": "Number of LIS sequences."
  },
  {
    "id": "L203",
    "prefix": "L",
    "section": "List",
    "difficulty": "Medium",
    "topic": "DP",
    "prompt": "House robber from list of values."
  },
  {
    "id": "L204",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "DP",
    "prompt": "House robber in circular street."
  },
  {
    "id": "L205",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "DP",
    "prompt": "Maximum sum of non-adjacent elements."
  },
  {
    "id": "L206",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "DP",
    "prompt": "Partition list into two subsets with equal sum."
  },
  {
    "id": "L207",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "DP",
    "prompt": "Minimum subset sum difference."
  },
  {
    "id": "L208",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "DP",
    "prompt": "Count subsets with given sum."
  },
  {
    "id": "L209",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "DP",
    "prompt": "Target sum ways with plus/minus signs."
  },
  {
    "id": "L210",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "DP",
    "prompt": "Longest bitonic subsequence length."
  },
  {
    "id": "L211",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Backtracking",
    "prompt": "Generate all subsets of a list."
  },
  {
    "id": "L212",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Backtracking",
    "prompt": "Generate subsets with duplicates handled."
  },
  {
    "id": "L213",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Backtracking",
    "prompt": "Generate all permutations of a list."
  },
  {
    "id": "L214",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Backtracking",
    "prompt": "Generate unique permutations with duplicates."
  },
  {
    "id": "L215",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Backtracking",
    "prompt": "Generate combinations of size k from list."
  },
  {
    "id": "L216",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Backtracking",
    "prompt": "Combination sum from candidate list."
  },
  {
    "id": "L217",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Backtracking",
    "prompt": "Combination sum without reuse."
  },
  {
    "id": "L218",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Backtracking",
    "prompt": "Split list into k equal-sum subsets."
  },
  {
    "id": "L219",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Backtracking",
    "prompt": "Palindrome partitioning for list of chars."
  },
  {
    "id": "L220",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Backtracking",
    "prompt": "N-Queens row placement list representation."
  },
  {
    "id": "L221",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Heap",
    "prompt": "Find kth largest using a min-heap."
  },
  {
    "id": "L222",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Heap",
    "prompt": "Merge k sorted lists."
  },
  {
    "id": "L223",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Heap",
    "prompt": "Find k closest points to origin from coordinate list."
  },
  {
    "id": "L224",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Heap",
    "prompt": "Reorganize string chars from list to avoid adjacency."
  },
  {
    "id": "L225",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Heap",
    "prompt": "Task scheduler with priorities from list input."
  },
  {
    "id": "L226",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Heap",
    "prompt": "Median from data stream list updates."
  },
  {
    "id": "L227",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Heap",
    "prompt": "Top k frequent words with lexicographic tie-break."
  },
  {
    "id": "L228",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Heap",
    "prompt": "Smallest range covering elements from k lists."
  },
  {
    "id": "L229",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Heap",
    "prompt": "Connect sticks with minimum total cost."
  },
  {
    "id": "L230",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Heap",
    "prompt": "Last stone weight simulation."
  },
  {
    "id": "L231",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Build suffix array from character list."
  },
  {
    "id": "L232",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Compute LCP array from suffix array."
  },
  {
    "id": "L233",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Find repeated subarray longest length (two lists)."
  },
  {
    "id": "L234",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Count smaller elements to the right for each item."
  },
  {
    "id": "L235",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Reverse pairs count where a[i] > 2*a[j]."
  },
  {
    "id": "L236",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Circular next greater element."
  },
  {
    "id": "L237",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Maximum product subarray."
  },
  {
    "id": "L238",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Minimum jumps to reach list end."
  },
  {
    "id": "L239",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Jump game reachability."
  },
  {
    "id": "L240",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Jump game minimum jumps."
  },
  {
    "id": "L241",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "System Design",
    "prompt": "Design bounded undo history for list edits."
  },
  {
    "id": "L242",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "System Design",
    "prompt": "Design diff generator between two lists."
  },
  {
    "id": "L243",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "System Design",
    "prompt": "Design list synchronization with conflict markers."
  },
  {
    "id": "L244",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "System Design",
    "prompt": "Design paginated list API response merger."
  },
  {
    "id": "L245",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "System Design",
    "prompt": "Design rate limiter request log list."
  },
  {
    "id": "L246",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Optimization",
    "prompt": "Reorder list to minimize adjacent difference sum."
  },
  {
    "id": "L247",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Optimization",
    "prompt": "Balance workloads across workers from task list."
  },
  {
    "id": "L248",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Optimization",
    "prompt": "Minimum swaps to sort list."
  },
  {
    "id": "L249",
    "prefix": "L",
    "section": "List",
    "difficulty": "Hard",
    "topic": "Optimization",
    "prompt": "Minimum adjacent swaps to group ones."
  },
  {
    "id": "L250",
    "prefix": "L",
    "section": "List",
    "difficulty": "Easy",
    "topic": "Design",
    "prompt": "Build a playlist manager with list CRUD and reorder."
  },
  {
    "id": "S001",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Basics",
    "prompt": "Convert a list to a set and count unique elements."
  },
  {
    "id": "S002",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Intersection",
    "prompt": "Find common items between two lists using sets."
  },
  {
    "id": "S003",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Symmetric Difference",
    "prompt": "Find items present in exactly one of two sets."
  },
  {
    "id": "S004",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Difference",
    "prompt": "Find elements in set A but not in set B."
  },
  {
    "id": "S005",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Difference",
    "prompt": "Find elements in set B but not in set A."
  },
  {
    "id": "S006",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Union",
    "prompt": "Combine two sets into one set of unique values."
  },
  {
    "id": "S007",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Subset",
    "prompt": "Check whether set A is a subset of set B."
  },
  {
    "id": "S008",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Superset",
    "prompt": "Check whether set A is a superset of set B."
  },
  {
    "id": "S009",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Disjoint",
    "prompt": "Check if two sets are disjoint."
  },
  {
    "id": "S010",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Mutation",
    "prompt": "Remove all duplicates from a list with set conversion."
  },
  {
    "id": "S011",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Membership",
    "prompt": "Count how many query values exist in a set."
  },
  {
    "id": "S012",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Filtering",
    "prompt": "Keep only values from a list that are in an allowed set."
  },
  {
    "id": "S013",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Filtering",
    "prompt": "Remove blocked words from a token list using a set."
  },
  {
    "id": "S014",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Text",
    "prompt": "Convert a sentence into a set of lowercase unique words."
  },
  {
    "id": "S015",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Text",
    "prompt": "Count unique words shared by two sentences."
  },
  {
    "id": "S016",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Text",
    "prompt": "Find rare words appearing in only one sentence."
  },
  {
    "id": "S017",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Validation",
    "prompt": "Check if all list elements are unique using a set."
  },
  {
    "id": "S018",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Numbers",
    "prompt": "Find duplicate numbers in a list using seen set."
  },
  {
    "id": "S019",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Numbers",
    "prompt": "Return first repeated element using a set tracker."
  },
  {
    "id": "S020",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Numbers",
    "prompt": "Return first non-repeated element with set support."
  },
  {
    "id": "S021",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Pairs",
    "prompt": "Determine if any pair sums to target using complements set."
  },
  {
    "id": "S022",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Pairs",
    "prompt": "Return all unique pairs that sum to target."
  },
  {
    "id": "S023",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Triplets",
    "prompt": "Check whether a zero-sum triplet exists using sets."
  },
  {
    "id": "S024",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Window",
    "prompt": "Find longest substring without repeating chars (set window)."
  },
  {
    "id": "S025",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Window",
    "prompt": "Find shortest substring containing all chars from a set."
  },
  {
    "id": "S026",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Sequence",
    "prompt": "Find longest consecutive sequence length using a set."
  },
  {
    "id": "S027",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Sequence",
    "prompt": "Return all sequence starts in an integer set."
  },
  {
    "id": "S028",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Ranges",
    "prompt": "Merge consecutive integers from a set into ranges."
  },
  {
    "id": "S029",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Graph",
    "prompt": "Build undirected adjacency sets from edge list."
  },
  {
    "id": "S030",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Graph",
    "prompt": "Find nodes with no incoming edges using sets."
  },
  {
    "id": "S031",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Graph",
    "prompt": "Check whether graph has self-loops using adjacency sets."
  },
  {
    "id": "S032",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Graph",
    "prompt": "Find mutual friends from two friend sets."
  },
  {
    "id": "S033",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Graph",
    "prompt": "Recommend friends as friends-of-friends excluding existing."
  },
  {
    "id": "S034",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Tags",
    "prompt": "Find users sharing at least k tags."
  },
  {
    "id": "S035",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Tags",
    "prompt": "Find top overlapping tag pairs between items."
  },
  {
    "id": "S036",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Similarity",
    "prompt": "Compute Jaccard similarity of two sets."
  },
  {
    "id": "S037",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Similarity",
    "prompt": "Rank documents by set overlap with query terms."
  },
  {
    "id": "S038",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Search",
    "prompt": "Build inverted index mapping term to set of doc IDs."
  },
  {
    "id": "S039",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Search",
    "prompt": "Return docs containing all query terms (set intersection)."
  },
  {
    "id": "S040",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Search",
    "prompt": "Return docs containing any query term (set union)."
  },
  {
    "id": "S041",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Search",
    "prompt": "Return docs containing query A but not query B."
  },
  {
    "id": "S042",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Shopping",
    "prompt": "Count unique items in a shopping cart."
  },
  {
    "id": "S043",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Shopping",
    "prompt": "Find products purchased by both customers."
  },
  {
    "id": "S044",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Shopping",
    "prompt": "Find products purchased by only one customer."
  },
  {
    "id": "S045",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Shopping",
    "prompt": "Recommend unseen products using set difference."
  },
  {
    "id": "S046",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Scheduling",
    "prompt": "Detect shared free slots using set intersections."
  },
  {
    "id": "S047",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Scheduling",
    "prompt": "Find all busy times from union of busy slot sets."
  },
  {
    "id": "S048",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Security",
    "prompt": "Detect reused passwords across users with set comparison."
  },
  {
    "id": "S049",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Security",
    "prompt": "Flag accounts sharing any recovery email tokens."
  },
  {
    "id": "S050",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Security",
    "prompt": "Identify unique failed-login IPs per user."
  },
  {
    "id": "S051",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Math",
    "prompt": "Implement set power set generation."
  },
  {
    "id": "S052",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Math",
    "prompt": "Compute Cartesian product of two sets."
  },
  {
    "id": "S053",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Math",
    "prompt": "Generate all 2-combinations from a set."
  },
  {
    "id": "S054",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Math",
    "prompt": "Generate all k-combinations from a set."
  },
  {
    "id": "S055",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Math",
    "prompt": "Generate all permutations from a set of small size."
  },
  {
    "id": "S056",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Hashing",
    "prompt": "Deduplicate tuples by converting each to frozenset."
  },
  {
    "id": "S057",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Hashing",
    "prompt": "Use set of frozensets to store undirected edges uniquely."
  },
  {
    "id": "S058",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Hashing",
    "prompt": "Count unique anagram groups using frozenset signatures."
  },
  {
    "id": "S059",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Validation",
    "prompt": "Check if two strings are isomorphic using mapping sets."
  },
  {
    "id": "S060",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Validation",
    "prompt": "Verify Sudoku row uniqueness using sets."
  },
  {
    "id": "S061",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Validation",
    "prompt": "Verify Sudoku column uniqueness using sets."
  },
  {
    "id": "S062",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Validation",
    "prompt": "Verify Sudoku sub-box uniqueness using sets."
  },
  {
    "id": "S063",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Geometry",
    "prompt": "Count unique points from coordinate pairs."
  },
  {
    "id": "S064",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Geometry",
    "prompt": "Detect duplicate slopes using normalized direction sets."
  },
  {
    "id": "S065",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Intervals",
    "prompt": "Count unique interval endpoints."
  },
  {
    "id": "S066",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Intervals",
    "prompt": "Remove covered intervals using endpoint sets."
  },
  {
    "id": "S067",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Streams",
    "prompt": "Keep rolling set of last k unique events."
  },
  {
    "id": "S068",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Streams",
    "prompt": "Track first unique event in a stream."
  },
  {
    "id": "S069",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Streams",
    "prompt": "Detect when stream has seen all required event types."
  },
  {
    "id": "S070",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Streams",
    "prompt": "Emit event only if unseen in last n records."
  },
  {
    "id": "S071",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Files",
    "prompt": "Compare two directory listings by filename sets."
  },
  {
    "id": "S072",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Files",
    "prompt": "Find missing files from expected manifest set."
  },
  {
    "id": "S073",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Files",
    "prompt": "Find renamed candidates by matching hash sets."
  },
  {
    "id": "S074",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "APIs",
    "prompt": "Validate required JSON keys using set subset check."
  },
  {
    "id": "S075",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "APIs",
    "prompt": "Detect unknown JSON keys using set difference."
  },
  {
    "id": "S076",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Data Quality",
    "prompt": "Find columns common to two datasets."
  },
  {
    "id": "S077",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Data Quality",
    "prompt": "Find columns unique to each dataset."
  },
  {
    "id": "S078",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Data Quality",
    "prompt": "Validate row has all mandatory tags."
  },
  {
    "id": "S079",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Data Quality",
    "prompt": "Find duplicate rows using set of serialized records."
  },
  {
    "id": "S080",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Data Quality",
    "prompt": "Detect conflicting records by overlapping key sets."
  },
  {
    "id": "S081",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Algorithms",
    "prompt": "Implement bloom-filter-like precheck with fallback set."
  },
  {
    "id": "S082",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Algorithms",
    "prompt": "Estimate cardinality growth over time windows."
  },
  {
    "id": "S083",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Algorithms",
    "prompt": "Build union-find using sets for connected components."
  },
  {
    "id": "S084",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Algorithms",
    "prompt": "Merge overlapping groups represented as sets."
  },
  {
    "id": "S085",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Algorithms",
    "prompt": "Compute transitive closure on small relation sets."
  },
  {
    "id": "S086",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Algorithms",
    "prompt": "Solve set cover greedily for required features."
  },
  {
    "id": "S087",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Algorithms",
    "prompt": "Find minimal hitting set for small universe."
  },
  {
    "id": "S088",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Algorithms",
    "prompt": "Detect near-duplicate documents via shingle sets."
  },
  {
    "id": "S089",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Algorithms",
    "prompt": "Compute MinHash-style signatures for set similarity."
  },
  {
    "id": "S090",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Algorithms",
    "prompt": "Cluster items by thresholded Jaccard overlap."
  },
  {
    "id": "S091",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Games",
    "prompt": "Determine unique letters guessed in a word game."
  },
  {
    "id": "S092",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Games",
    "prompt": "Check if guessed letters cover all letters in a word."
  },
  {
    "id": "S093",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Games",
    "prompt": "Find shared cards between two players' hands."
  },
  {
    "id": "S094",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Games",
    "prompt": "Find cards only one player holds."
  },
  {
    "id": "S095",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Biology",
    "prompt": "Find shared genes between two samples."
  },
  {
    "id": "S096",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Biology",
    "prompt": "Identify sample-specific genes."
  },
  {
    "id": "S097",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Location",
    "prompt": "Find users who visited all required locations."
  },
  {
    "id": "S098",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Location",
    "prompt": "Find users with no overlap in visited locations."
  },
  {
    "id": "S099",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Optimization",
    "prompt": "Partition users into disjoint cohorts by attribute sets."
  },
  {
    "id": "S100",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Design",
    "prompt": "Build a tiny tag manager using set add/remove/query."
  },
  {
    "id": "S101",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Basics",
    "prompt": "Add, remove, and check elements in a set."
  },
  {
    "id": "S102",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Basics",
    "prompt": "Convert tuple list into a set of tuples."
  },
  {
    "id": "S103",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Basics",
    "prompt": "Compute size of union for three sets."
  },
  {
    "id": "S104",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Basics",
    "prompt": "Find if any set in a list is empty."
  },
  {
    "id": "S105",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Basics",
    "prompt": "Remove all values below threshold from a set."
  },
  {
    "id": "S106",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Membership",
    "prompt": "Count elements from list not found in set."
  },
  {
    "id": "S107",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Membership",
    "prompt": "Build set of lowercase letters from text."
  },
  {
    "id": "S108",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Membership",
    "prompt": "Check if string chars are all in allowed charset set."
  },
  {
    "id": "S109",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Deduplication",
    "prompt": "Deduplicate list of dictionaries by frozen key set."
  },
  {
    "id": "S110",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Deduplication",
    "prompt": "Deduplicate emails case-insensitively using sets."
  },
  {
    "id": "S111",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Comparison",
    "prompt": "Find common elements across N sets."
  },
  {
    "id": "S112",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Comparison",
    "prompt": "Find elements appearing in at least two sets."
  },
  {
    "id": "S113",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Comparison",
    "prompt": "Find elements appearing in exactly k sets."
  },
  {
    "id": "S114",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Comparison",
    "prompt": "Compute pairwise intersections for set list."
  },
  {
    "id": "S115",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Comparison",
    "prompt": "Compute pairwise Jaccard matrix for set list."
  },
  {
    "id": "S116",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Data",
    "prompt": "Build map from item to set of source IDs."
  },
  {
    "id": "S117",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Data",
    "prompt": "Build set of unique composite keys from records."
  },
  {
    "id": "S118",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Data",
    "prompt": "Validate row uniqueness by key-set hashing."
  },
  {
    "id": "S119",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Data",
    "prompt": "Track unseen categories in a stream."
  },
  {
    "id": "S120",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Data",
    "prompt": "Track first time all required categories have appeared."
  },
  {
    "id": "S121",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Window",
    "prompt": "Distinct count per prefix using growing set."
  },
  {
    "id": "S122",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Window",
    "prompt": "Distinct count per suffix using reverse set scan."
  },
  {
    "id": "S123",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Window",
    "prompt": "Longest segment with at most k distinct values."
  },
  {
    "id": "S124",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Window",
    "prompt": "Shortest segment containing all target tokens."
  },
  {
    "id": "S125",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Window",
    "prompt": "Count segments containing all required tags."
  },
  {
    "id": "S126",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Sequence",
    "prompt": "Detect duplicate within k indices using set window."
  },
  {
    "id": "S127",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Sequence",
    "prompt": "Longest no-repeat subarray using set window."
  },
  {
    "id": "S128",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Sequence",
    "prompt": "Count unique subarrays for small arrays."
  },
  {
    "id": "S129",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Sequence",
    "prompt": "Distinct subarray count using rolling hashing + sets."
  },
  {
    "id": "S130",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Sequence",
    "prompt": "Longest repeated subarray via binary search and set."
  },
  {
    "id": "S131",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Graph",
    "prompt": "Find connected component seeds from edge set."
  },
  {
    "id": "S132",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Graph",
    "prompt": "Remove duplicate undirected edges with frozenset."
  },
  {
    "id": "S133",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Graph",
    "prompt": "Find isolated nodes from node/edge sets."
  },
  {
    "id": "S134",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Graph",
    "prompt": "Find articulation candidate nodes by neighbor sets."
  },
  {
    "id": "S135",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Graph",
    "prompt": "Triangle detection via neighbor set intersection."
  },
  {
    "id": "S136",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Graph",
    "prompt": "Clique candidate verification from node subsets."
  },
  {
    "id": "S137",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Graph",
    "prompt": "Bipartite check using partition sets."
  },
  {
    "id": "S138",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Graph",
    "prompt": "Detect odd cycle witness with visited parity sets."
  },
  {
    "id": "S139",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Graph",
    "prompt": "Build reachability sets with repeated expansion."
  },
  {
    "id": "S140",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Graph",
    "prompt": "Recommend links by highest mutual-neighbor set size."
  },
  {
    "id": "S141",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Text",
    "prompt": "Unique stems from token list with stemmer output set."
  },
  {
    "id": "S142",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Text",
    "prompt": "Build stopword-filtered vocabulary set."
  },
  {
    "id": "S143",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Text",
    "prompt": "Compare two documents by token-set overlap ratio."
  },
  {
    "id": "S144",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Text",
    "prompt": "Build document fingerprint from hashed token set."
  },
  {
    "id": "S145",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Text",
    "prompt": "Near-duplicate detection by k-shingle set overlap."
  },
  {
    "id": "S146",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Text",
    "prompt": "Topic tagging by keyword-set hit thresholds."
  },
  {
    "id": "S147",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Text",
    "prompt": "Build synonym graph from pair sets."
  },
  {
    "id": "S148",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Text",
    "prompt": "Word ladder neighbor generation using wildcard sets."
  },
  {
    "id": "S149",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Text",
    "prompt": "Detect pangram using alphabet set difference."
  },
  {
    "id": "S150",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Text",
    "prompt": "Count unique hashtags from social posts."
  },
  {
    "id": "S151",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Security",
    "prompt": "Track distinct devices per user."
  },
  {
    "id": "S152",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Security",
    "prompt": "Find users sharing IP addresses."
  },
  {
    "id": "S153",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Security",
    "prompt": "Detect impossible travel by country set transitions."
  },
  {
    "id": "S154",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Security",
    "prompt": "Correlate alerts by overlapping IOC sets."
  },
  {
    "id": "S155",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Security",
    "prompt": "Build allowlist/denylist conflict checker."
  },
  {
    "id": "S156",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Security",
    "prompt": "Find minimal indicator set covering all incidents."
  },
  {
    "id": "S157",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Security",
    "prompt": "Distinct failed-endpoint count per API key."
  },
  {
    "id": "S158",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Security",
    "prompt": "Identify stale permissions via set difference."
  },
  {
    "id": "S159",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Security",
    "prompt": "Compute privilege drift between snapshots."
  },
  {
    "id": "S160",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Security",
    "prompt": "Role mining by frequent permission-set patterns."
  },
  {
    "id": "S161",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Scheduling",
    "prompt": "Common availability across multiple calendars."
  },
  {
    "id": "S162",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Scheduling",
    "prompt": "Detect overlapping shifts by employee set."
  },
  {
    "id": "S163",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Scheduling",
    "prompt": "Find understaffed slots by required-role sets."
  },
  {
    "id": "S164",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Scheduling",
    "prompt": "Minimum team selection from skill sets."
  },
  {
    "id": "S165",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Scheduling",
    "prompt": "Assign reviewers so required expertise sets are covered."
  },
  {
    "id": "S166",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Scheduling",
    "prompt": "Detect conflicts in classroom resource sets."
  },
  {
    "id": "S167",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Location",
    "prompt": "Nearby venue overlap by visited-place sets."
  },
  {
    "id": "S168",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Location",
    "prompt": "Find travelers with shared itinerary stop sets."
  },
  {
    "id": "S169",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Location",
    "prompt": "Choose minimum hubs covering all route sets."
  },
  {
    "id": "S170",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Location",
    "prompt": "Cluster users by location-set similarity threshold."
  },
  {
    "id": "S171",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Math",
    "prompt": "Verify set identities with random test sets."
  },
  {
    "id": "S172",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Math",
    "prompt": "Compute all proper subsets of a set."
  },
  {
    "id": "S173",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Math",
    "prompt": "Compute all supersets within a finite universe."
  },
  {
    "id": "S174",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Math",
    "prompt": "Generate partitions of a set."
  },
  {
    "id": "S175",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Math",
    "prompt": "Count set partitions (Bell numbers) for small n."
  },
  {
    "id": "S176",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Math",
    "prompt": "Build incidence matrix from universe and subset family."
  },
  {
    "id": "S177",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Math",
    "prompt": "Validate matroid-like exchange property for family of sets."
  },
  {
    "id": "S178",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Math",
    "prompt": "Maximum disjoint subset family selection."
  },
  {
    "id": "S179",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Math",
    "prompt": "Exact cover search using set constraints."
  },
  {
    "id": "S180",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Math",
    "prompt": "Hitting set brute force for small universes."
  },
  {
    "id": "S181",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "APIs",
    "prompt": "Validate request has only supported query params."
  },
  {
    "id": "S182",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "APIs",
    "prompt": "Compare API versions by endpoint name sets."
  },
  {
    "id": "S183",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "APIs",
    "prompt": "Detect deprecated endpoints still referenced."
  },
  {
    "id": "S184",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "APIs",
    "prompt": "Build set of unique response field names."
  },
  {
    "id": "S185",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "APIs",
    "prompt": "Contract-drift detection by schema-field set diff."
  },
  {
    "id": "S186",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Files",
    "prompt": "Unique file hashes from backup snapshots."
  },
  {
    "id": "S187",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Files",
    "prompt": "Compare software package lists between hosts."
  },
  {
    "id": "S188",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Files",
    "prompt": "Find orphan files not referenced by manifest set."
  },
  {
    "id": "S189",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Files",
    "prompt": "Deduplicate media groups by perceptual hash sets."
  },
  {
    "id": "S190",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Files",
    "prompt": "Incremental backup selection via changed-block sets."
  },
  {
    "id": "S191",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Commerce",
    "prompt": "Shared customers between product sets."
  },
  {
    "id": "S192",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Commerce",
    "prompt": "Market basket overlap for category sets."
  },
  {
    "id": "S193",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Commerce",
    "prompt": "Frequent itemset counting for size-2 sets."
  },
  {
    "id": "S194",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Commerce",
    "prompt": "Candidate generation for Apriori using sets."
  },
  {
    "id": "S195",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Commerce",
    "prompt": "Recommendation by maximal overlap in purchase sets."
  },
  {
    "id": "S196",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Education",
    "prompt": "Students with all required completed-course sets."
  },
  {
    "id": "S197",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Education",
    "prompt": "Course prerequisite closure using set expansion."
  },
  {
    "id": "S198",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Education",
    "prompt": "Schedule builder from conflict set constraints."
  },
  {
    "id": "S199",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Education",
    "prompt": "Degree audit with requirement-set satisfaction."
  },
  {
    "id": "S200",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Design",
    "prompt": "Flashcard tags system with set operations."
  },
  {
    "id": "S201",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Bio",
    "prompt": "Unique DNA k-mers in a sequence."
  },
  {
    "id": "S202",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Bio",
    "prompt": "Shared k-mers between two sequences."
  },
  {
    "id": "S203",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Bio",
    "prompt": "Minimize probe set covering mutation positions."
  },
  {
    "id": "S204",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Bio",
    "prompt": "Cluster samples by gene-set overlap."
  },
  {
    "id": "S205",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "IoT",
    "prompt": "Distinct sensor IDs per site."
  },
  {
    "id": "S206",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "IoT",
    "prompt": "Devices missing required capability set."
  },
  {
    "id": "S207",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "IoT",
    "prompt": "Firmware rollout cohorts by compatible-model sets."
  },
  {
    "id": "S208",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "IoT",
    "prompt": "Alert co-occurrence mining with event sets."
  },
  {
    "id": "S209",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "DevOps",
    "prompt": "Compare container image package sets."
  },
  {
    "id": "S210",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "DevOps",
    "prompt": "Detect config drift by key-set differences."
  },
  {
    "id": "S211",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "DevOps",
    "prompt": "Choose minimum canary hosts covering all regions."
  },
  {
    "id": "S212",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "DevOps",
    "prompt": "Dependency conflict detection via version-set constraints."
  },
  {
    "id": "S213",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "ML",
    "prompt": "Unique labels present in prediction batches."
  },
  {
    "id": "S214",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "ML",
    "prompt": "Label coverage gap between train and test sets."
  },
  {
    "id": "S215",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "ML",
    "prompt": "Feature selection by set-cover approximation."
  },
  {
    "id": "S216",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "ML",
    "prompt": "Ensemble disagreement by class-prediction sets."
  },
  {
    "id": "S217",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "ML",
    "prompt": "Data leakage detection via overlapping ID sets."
  },
  {
    "id": "S218",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Games",
    "prompt": "Detect repeated board states with set cache."
  },
  {
    "id": "S219",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Medium",
    "topic": "Games",
    "prompt": "Unique moves available from piece set."
  },
  {
    "id": "S220",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Games",
    "prompt": "Card deck validation by required card set."
  },
  {
    "id": "S221",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Optimization",
    "prompt": "Maximum non-overlapping interval-set packing."
  },
  {
    "id": "S222",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Optimization",
    "prompt": "Team formation maximizing skill diversity sets."
  },
  {
    "id": "S223",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Optimization",
    "prompt": "Warehouse placement covering customer-zone sets."
  },
  {
    "id": "S224",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Optimization",
    "prompt": "Fault-domain selection with disjointness constraints."
  },
  {
    "id": "S225",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Optimization",
    "prompt": "Redundancy planning with overlap bounds."
  },
  {
    "id": "S226",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Streaming",
    "prompt": "Approximate distinct count checkpoint comparison."
  },
  {
    "id": "S227",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Streaming",
    "prompt": "Sliding distinct counts with expiring set buckets."
  },
  {
    "id": "S228",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Streaming",
    "prompt": "Heavy hitter candidate maintenance with helper sets."
  },
  {
    "id": "S229",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Streaming",
    "prompt": "Session boundary detection by active user sets."
  },
  {
    "id": "S230",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Streaming",
    "prompt": "Real-time anomaly when rare-event set spikes."
  },
  {
    "id": "S231",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Implement set trie for integer subsets."
  },
  {
    "id": "S232",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Canonicalize nested set expressions."
  },
  {
    "id": "S233",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Parse and evaluate custom set algebra expressions."
  },
  {
    "id": "S234",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Minimize boolean expression represented by term sets."
  },
  {
    "id": "S235",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Build conflict graph from overlapping resource sets."
  },
  {
    "id": "S236",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Color conflict graph using adjacency sets."
  },
  {
    "id": "S237",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Hypergraph edge representation with set families."
  },
  {
    "id": "S238",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Find transversal of hypergraph edges."
  },
  {
    "id": "S239",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Enumerate maximal independent sets on small graphs."
  },
  {
    "id": "S240",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Enumerate maximal cliques via set intersections."
  },
  {
    "id": "S241",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Design",
    "prompt": "Build permission engine using role/permission sets."
  },
  {
    "id": "S242",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Design",
    "prompt": "Build feature-flag targeting via user-attribute sets."
  },
  {
    "id": "S243",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Design",
    "prompt": "Build audience segmentation using set expressions."
  },
  {
    "id": "S244",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Design",
    "prompt": "Build conflict-free calendar using slot sets."
  },
  {
    "id": "S245",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Design",
    "prompt": "Build plagiarism checker with shingle-set index."
  },
  {
    "id": "S246",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Design",
    "prompt": "Build recommendation engine from user-item sets."
  },
  {
    "id": "S247",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Design",
    "prompt": "Build graph analytics toolkit around neighbor sets."
  },
  {
    "id": "S248",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Design",
    "prompt": "Build schema evolution checker with field sets."
  },
  {
    "id": "S249",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Hard",
    "topic": "Design",
    "prompt": "Build duplicate detection service using signature sets."
  },
  {
    "id": "S250",
    "prefix": "S",
    "section": "Set",
    "difficulty": "Easy",
    "topic": "Design",
    "prompt": "Build a bookmark tag app with set CRUD operations."
  },
  {
    "id": "D001",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Counting",
    "prompt": "Count character frequency in a string."
  },
  {
    "id": "D002",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Counting",
    "prompt": "Count word frequency in a sentence."
  },
  {
    "id": "D003",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Mapping",
    "prompt": "Create dictionary mapping numbers to their squares."
  },
  {
    "id": "D004",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Mapping",
    "prompt": "Swap keys and values when values are unique."
  },
  {
    "id": "D005",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Lookup",
    "prompt": "Return value for key with a default if missing."
  },
  {
    "id": "D006",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Lookup",
    "prompt": "Check whether a key exists without using in operator."
  },
  {
    "id": "D007",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Update",
    "prompt": "Increment count for each item in a list."
  },
  {
    "id": "D008",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Update",
    "prompt": "Merge two dictionaries where second overrides first."
  },
  {
    "id": "D009",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Update",
    "prompt": "Merge two dictionaries by summing shared numeric values."
  },
  {
    "id": "D010",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Filtering",
    "prompt": "Remove keys with None values."
  },
  {
    "id": "D011",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Filtering",
    "prompt": "Keep only keys from an allowed list."
  },
  {
    "id": "D012",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Transform",
    "prompt": "Convert dictionary keys to lowercase."
  },
  {
    "id": "D013",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Transform",
    "prompt": "Convert dictionary values to strings."
  },
  {
    "id": "D014",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Sorting",
    "prompt": "Sort dictionary by keys."
  },
  {
    "id": "D015",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Sorting",
    "prompt": "Sort dictionary by values descending."
  },
  {
    "id": "D016",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Extremes",
    "prompt": "Find key with maximum value."
  },
  {
    "id": "D017",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Extremes",
    "prompt": "Find key with minimum value."
  },
  {
    "id": "D018",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Aggregation",
    "prompt": "Compute sum of all numeric values."
  },
  {
    "id": "D019",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Aggregation",
    "prompt": "Compute average of numeric values."
  },
  {
    "id": "D020",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Validation",
    "prompt": "Check whether two dictionaries are equal."
  },
  {
    "id": "D021",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Grouping",
    "prompt": "Group words by first letter."
  },
  {
    "id": "D031",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Inventory",
    "prompt": "Update stock counts after list of sold items."
  },
  {
    "id": "D032",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Inventory",
    "prompt": "Return items below reorder threshold."
  },
  {
    "id": "D033",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Inventory",
    "prompt": "Compute total inventory value from quantity and price dicts."
  },
  {
    "id": "D034",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Pricing",
    "prompt": "Calculate order total from cart list and price dictionary."
  },
  {
    "id": "D035",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Pricing",
    "prompt": "Apply coupon percentages by category using maps."
  },
  {
    "id": "D036",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Pricing",
    "prompt": "Find missing product prices for cart items."
  },
  {
    "id": "D037",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Users",
    "prompt": "Map user IDs to login attempt counts."
  },
  {
    "id": "D038",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Users",
    "prompt": "Build reverse index from role to users."
  },
  {
    "id": "D039",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Users",
    "prompt": "Find users with duplicate email domains."
  },
  {
    "id": "D040",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Users",
    "prompt": "Merge user profiles from two data sources."
  },
  {
    "id": "D041",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Text",
    "prompt": "Build concordance mapping word to line numbers."
  },
  {
    "id": "D042",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Text",
    "prompt": "Count bigram frequency using tuple keys."
  },
  {
    "id": "D043",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Text",
    "prompt": "Count trigram frequency using tuple keys."
  },
  {
    "id": "D044",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Text",
    "prompt": "Build index of word positions in a paragraph."
  },
  {
    "id": "D045",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Text",
    "prompt": "Return top k frequent words."
  },
  {
    "id": "D046",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Text",
    "prompt": "Replace words in sentence using mapping dictionary."
  },
  {
    "id": "D047",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Text",
    "prompt": "Normalize synonym groups into canonical words."
  },
  {
    "id": "D048",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Text",
    "prompt": "Detect first non-repeating character using counts."
  },
  {
    "id": "D049",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Text",
    "prompt": "Check if two strings are anagrams using frequency dicts."
  },
  {
    "id": "D050",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Text",
    "prompt": "Compute edit operation counts from aligned token dictionaries."
  },
  {
    "id": "D051",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Data",
    "prompt": "Build histogram dictionary from numeric list bins."
  },
  {
    "id": "D052",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Data",
    "prompt": "Build frequency table for categorical column."
  },
  {
    "id": "D053",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Data",
    "prompt": "Compute cumulative counts from sorted frequency dict."
  },
  {
    "id": "D054",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Data",
    "prompt": "Normalize frequency dictionary into probabilities."
  },
  {
    "id": "D055",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Data",
    "prompt": "Compute entropy from probability dictionary."
  },
  {
    "id": "D056",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Data",
    "prompt": "Build confusion matrix from actual vs predicted labels."
  },
  {
    "id": "D057",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Data",
    "prompt": "Compute precision/recall per class from confusion matrix dict."
  },
  {
    "id": "D058",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Data",
    "prompt": "Pivot records into dictionary-of-dictionaries."
  },
  {
    "id": "D059",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Data",
    "prompt": "Unpivot dictionary-of-dictionaries into row records."
  },
  {
    "id": "D060",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Data",
    "prompt": "Detect inconsistent schemas across list of dictionaries."
  },
  {
    "id": "D061",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Caching",
    "prompt": "Implement an LRU cache with dictionary + linked structure."
  },
  {
    "id": "D062",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Caching",
    "prompt": "Memoize Fibonacci using a dictionary cache."
  },
  {
    "id": "D063",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Caching",
    "prompt": "Memoize recursive grid path counts."
  },
  {
    "id": "D064",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Graphs",
    "prompt": "Build adjacency dictionary from edge list."
  },
  {
    "id": "D065",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Graphs",
    "prompt": "Compute node degrees from adjacency dictionary."
  },
  {
    "id": "D066",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Graphs",
    "prompt": "BFS traversal using adjacency dictionary."
  },
  {
    "id": "D067",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Graphs",
    "prompt": "DFS traversal using adjacency dictionary."
  },
  {
    "id": "D068",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Graphs",
    "prompt": "Detect cycle in directed graph using state dictionaries."
  },
  {
    "id": "D069",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Graphs",
    "prompt": "Topological sort using indegree dictionary."
  },
  {
    "id": "D070",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Graphs",
    "prompt": "Dijkstra shortest path with distance dictionary."
  },
  {
    "id": "D071",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Dynamic Programming",
    "prompt": "Coin change with dictionary memo."
  },
  {
    "id": "D072",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Dynamic Programming",
    "prompt": "Word break using dictionary memoization."
  },
  {
    "id": "D073",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Dynamic Programming",
    "prompt": "Longest common subsequence with dict cache."
  },
  {
    "id": "D074",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Intervals",
    "prompt": "Merge intervals stored in dictionary by start key."
  },
  {
    "id": "D075",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Intervals",
    "prompt": "Track room allocations by meeting ID dictionary."
  },
  {
    "id": "D076",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Scheduling",
    "prompt": "Assign tasks to workers using workload dictionary."
  },
  {
    "id": "D077",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Scheduling",
    "prompt": "Detect resource conflicts using time-slot dictionaries."
  },
  {
    "id": "D078",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Security",
    "prompt": "Count failed logins per IP and flag thresholds."
  },
  {
    "id": "D079",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Security",
    "prompt": "Track token expiration times in dictionary."
  },
  {
    "id": "D080",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Security",
    "prompt": "Reconcile access logs by user and action counts."
  },
  {
    "id": "D081",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "APIs",
    "prompt": "Validate payload keys and required value types."
  },
  {
    "id": "D082",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "APIs",
    "prompt": "Convert JSON object to flattened key-value map."
  },
  {
    "id": "D083",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "APIs",
    "prompt": "Rebuild nested JSON object from flattened map."
  },
  {
    "id": "D084",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "APIs",
    "prompt": "Merge paginated API results keyed by ID."
  },
  {
    "id": "D085",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "APIs",
    "prompt": "Detect duplicate records by composite dictionary key."
  },
  {
    "id": "D086",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Files",
    "prompt": "Build extension-to-file-list map from filenames."
  },
  {
    "id": "D087",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Files",
    "prompt": "Count lines per file from file metadata dictionary."
  },
  {
    "id": "D088",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Files",
    "prompt": "Find largest file per extension."
  },
  {
    "id": "D089",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Finance",
    "prompt": "Aggregate expenses by category and month."
  },
  {
    "id": "D090",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Finance",
    "prompt": "Compute account balances from transaction dictionary."
  },
  {
    "id": "D091",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Finance",
    "prompt": "Detect suspicious transfers using account-pair frequencies."
  },
  {
    "id": "D092",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Geometry",
    "prompt": "Count points per quadrant using dictionary counters."
  },
  {
    "id": "D093",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Geometry",
    "prompt": "Group points by slope from origin."
  },
  {
    "id": "D094",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Games",
    "prompt": "Track game leaderboard with player-score dictionary."
  },
  {
    "id": "D095",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Games",
    "prompt": "Resolve rank ties with secondary stats dictionary."
  },
  {
    "id": "D096",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Algorithms",
    "prompt": "Implement trie with nested dictionaries."
  },
  {
    "id": "D097",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Algorithms",
    "prompt": "Implement union-find parent/rank dictionaries."
  },
  {
    "id": "D098",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Algorithms",
    "prompt": "Build frequency-based Huffman input dictionary."
  },
  {
    "id": "D099",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Algorithms",
    "prompt": "Build Markov transition dictionary from tokens."
  },
  {
    "id": "D100",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Design",
    "prompt": "Build a mini phonebook app using dictionary CRUD operations."
  },
  {
    "id": "D101",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Counting",
    "prompt": "Count digit frequency in an integer string."
  },
  {
    "id": "D102",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Counting",
    "prompt": "Count sentence-ending punctuation frequencies."
  },
  {
    "id": "D103",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Mapping",
    "prompt": "Map letters to positions (a=1, b=2, ...)."
  },
  {
    "id": "D104",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Mapping",
    "prompt": "Build month-name to month-number dictionary."
  },
  {
    "id": "D105",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Lookup",
    "prompt": "Return all missing keys from required key list."
  },
  {
    "id": "D106",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Lookup",
    "prompt": "Safe nested get with fallback default."
  },
  {
    "id": "D107",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Update",
    "prompt": "Increment/decrement stock counts from operations list."
  },
  {
    "id": "D108",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Update",
    "prompt": "Apply bulk key renaming with mapping dictionary."
  },
  {
    "id": "D109",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Filtering",
    "prompt": "Remove keys whose values are empty strings."
  },
  {
    "id": "D110",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Filtering",
    "prompt": "Keep entries with numeric values only."
  },
  {
    "id": "D111",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Sorting",
    "prompt": "Sort dictionary by value then key."
  },
  {
    "id": "D112",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Sorting",
    "prompt": "Return top k keys by numeric value."
  },
  {
    "id": "D113",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Sorting",
    "prompt": "Stable rank keys by score with ties."
  },
  {
    "id": "D114",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Aggregation",
    "prompt": "Sum nested numeric dictionary values."
  },
  {
    "id": "D115",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Aggregation",
    "prompt": "Aggregate values by key prefix."
  },
  {
    "id": "D116",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Aggregation",
    "prompt": "Aggregate logs by date extracted from key."
  },
  {
    "id": "D117",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Transformation",
    "prompt": "Convert dict values from strings to numbers safely."
  },
  {
    "id": "D118",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Transformation",
    "prompt": "Normalize whitespace in all string values."
  },
  {
    "id": "D119",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Transformation",
    "prompt": "Round all float values to n decimals."
  },
  {
    "id": "D120",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Transformation",
    "prompt": "Convert snake_case keys to camelCase."
  },
  {
    "id": "D121",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Grouping",
    "prompt": "Group records by two-level key (country, city)."
  },
  {
    "id": "D122",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Grouping",
    "prompt": "Group transactions by account and type."
  },
  {
    "id": "D123",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Grouping",
    "prompt": "Group events by hour bucket."
  },
  {
    "id": "D124",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Grouping",
    "prompt": "Group products by category and brand."
  },
  {
    "id": "D125",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Inversion",
    "prompt": "Build value-to-keys map preserving key order."
  },
  {
    "id": "D126",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Inversion",
    "prompt": "Invert mapping with duplicate values and counts."
  },
  {
    "id": "D127",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Nested",
    "prompt": "Delete nested key path if present."
  },
  {
    "id": "D128",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Nested",
    "prompt": "Set nested key path creating missing dictionaries."
  },
  {
    "id": "D129",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Nested",
    "prompt": "Compare nested dictionaries for deep equality."
  },
  {
    "id": "D130",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Nested",
    "prompt": "Diff two nested dictionaries (added/removed/changed)."
  },
  {
    "id": "D131",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Inventory",
    "prompt": "Merge warehouse stock dictionaries by SKU."
  },
  {
    "id": "D132",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Inventory",
    "prompt": "Compute backorder list from demand and stock maps."
  },
  {
    "id": "D133",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Pricing",
    "prompt": "Resolve final price using layered override dictionaries."
  },
  {
    "id": "D134",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Pricing",
    "prompt": "Currency conversion for price dictionary by rate map."
  },
  {
    "id": "D135",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Users",
    "prompt": "Build username index from profile dictionaries."
  },
  {
    "id": "D136",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Users",
    "prompt": "Detect duplicate usernames after normalization."
  },
  {
    "id": "D137",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Users",
    "prompt": "Build manager-to-report dictionary from org chart rows."
  },
  {
    "id": "D138",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Users",
    "prompt": "Compute team sizes from manager-report dictionary."
  },
  {
    "id": "D139",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Users",
    "prompt": "Find inactive users from last-seen timestamp dictionary."
  },
  {
    "id": "D140",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Users",
    "prompt": "Reconcile user status across two system dictionaries."
  },
  {
    "id": "D141",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Text",
    "prompt": "Word-to-synonym-list expansion from synonym dictionary."
  },
  {
    "id": "D142",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Text",
    "prompt": "Build abbreviation dictionary from phrase list."
  },
  {
    "id": "D143",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Text",
    "prompt": "Replace abbreviations in text using lookup dictionary."
  },
  {
    "id": "D144",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Text",
    "prompt": "Build token-to-document-frequency dictionary."
  },
  {
    "id": "D145",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Text",
    "prompt": "Build tf-idf-ready term count dictionaries."
  },
  {
    "id": "D146",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Text",
    "prompt": "Character transition counts (bigram dictionary)."
  },
  {
    "id": "D147",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Text",
    "prompt": "Build suffix-frequency dictionary for substring analytics."
  },
  {
    "id": "D148",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Text",
    "prompt": "Build prefix trie using nested dictionaries."
  },
  {
    "id": "D149",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Text",
    "prompt": "Autocomplete frequency ranking from trie dictionaries."
  },
  {
    "id": "D150",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Text",
    "prompt": "Detect typo candidates using edit-distance map cache."
  },
  {
    "id": "D151",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Data",
    "prompt": "Column profiling dictionary (type, nulls, distinct)."
  },
  {
    "id": "D152",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Data",
    "prompt": "Null-imputation plan dictionary by column stats."
  },
  {
    "id": "D153",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Data",
    "prompt": "Detect outlier columns via summary dictionaries."
  },
  {
    "id": "D154",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Data",
    "prompt": "Build row-count dictionary by partition key."
  },
  {
    "id": "D155",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Data",
    "prompt": "Build dedup map from hash to row IDs."
  },
  {
    "id": "D156",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Data",
    "prompt": "Build quality-rule result dictionary by rule name."
  },
  {
    "id": "D157",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Data",
    "prompt": "Build lineage map from output fields to source fields."
  },
  {
    "id": "D158",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Data",
    "prompt": "Build join-key match statistics dictionary."
  },
  {
    "id": "D159",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Data",
    "prompt": "Schema merge with conflict resolution dictionary."
  },
  {
    "id": "D160",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Data",
    "prompt": "Slowly changing dimension merge using key dictionaries."
  },
  {
    "id": "D161",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Caching",
    "prompt": "Expiring cache dictionary with timestamps."
  },
  {
    "id": "D162",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Caching",
    "prompt": "LFU cache counters using dictionaries."
  },
  {
    "id": "D163",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Caching",
    "prompt": "ARC-like cache metadata dictionaries."
  },
  {
    "id": "D164",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Graphs",
    "prompt": "Build weighted adjacency dictionary."
  },
  {
    "id": "D165",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Graphs",
    "prompt": "Bellman-Ford using distance dictionary."
  },
  {
    "id": "D166",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Graphs",
    "prompt": "Floyd-Warshall sparse update dictionary approach."
  },
  {
    "id": "D167",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Graphs",
    "prompt": "Reconstruct shortest path using parent dictionary."
  },
  {
    "id": "D168",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Graphs",
    "prompt": "Strongly connected components index dictionaries."
  },
  {
    "id": "D169",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Graphs",
    "prompt": "Union-find with path compression dictionaries."
  },
  {
    "id": "D170",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Graphs",
    "prompt": "Kruskal MST using edge and parent dictionaries."
  },
  {
    "id": "D171",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "DP",
    "prompt": "Memoized knapsack by (index, capacity) dictionary key."
  },
  {
    "id": "D172",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "DP",
    "prompt": "Edit distance memoization dictionary."
  },
  {
    "id": "D173",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "DP",
    "prompt": "Matrix-chain multiplication memo dictionary."
  },
  {
    "id": "D174",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "DP",
    "prompt": "Burst balloons memo dictionary."
  },
  {
    "id": "D175",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "DP",
    "prompt": "Partition palindrome min cuts memo dictionary."
  },
  {
    "id": "D176",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Intervals",
    "prompt": "Sweep-line event dictionary for overlaps."
  },
  {
    "id": "D177",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Intervals",
    "prompt": "Calendar booking conflict counts by endpoint map."
  },
  {
    "id": "D178",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Scheduling",
    "prompt": "Topological schedule from dependency dictionary."
  },
  {
    "id": "D179",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Scheduling",
    "prompt": "Critical path length from task-duration dictionaries."
  },
  {
    "id": "D180",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Scheduling",
    "prompt": "Resource leveling using assignment dictionaries."
  },
  {
    "id": "D181",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "APIs",
    "prompt": "Header normalization dictionary for inbound requests."
  },
  {
    "id": "D182",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "APIs",
    "prompt": "Query parameter parsing into typed dictionary."
  },
  {
    "id": "D183",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "APIs",
    "prompt": "Response field masking by policy dictionary."
  },
  {
    "id": "D184",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "APIs",
    "prompt": "Error-code to message localization dictionary."
  },
  {
    "id": "D185",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "APIs",
    "prompt": "Idempotency-key request state dictionary."
  },
  {
    "id": "D186",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "APIs",
    "prompt": "API quota counters by key and window dictionary."
  },
  {
    "id": "D187",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Files",
    "prompt": "Path-to-metadata index dictionary."
  },
  {
    "id": "D188",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Files",
    "prompt": "Content-hash to file-list reverse dictionary."
  },
  {
    "id": "D189",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Files",
    "prompt": "Incremental index updates from filesystem event dictionary."
  },
  {
    "id": "D190",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Files",
    "prompt": "File dependency graph from import dictionaries."
  },
  {
    "id": "D191",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Finance",
    "prompt": "Daily P&L aggregation by instrument dictionary."
  },
  {
    "id": "D192",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Finance",
    "prompt": "FX exposure by currency dictionary."
  },
  {
    "id": "D193",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Finance",
    "prompt": "Reconcile ledger entries by composite-key dictionary."
  },
  {
    "id": "D194",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Finance",
    "prompt": "Fraud score feature dictionary per transaction."
  },
  {
    "id": "D195",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Finance",
    "prompt": "Portfolio rebalance orders from target/actual dictionaries."
  },
  {
    "id": "D196",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Monitoring",
    "prompt": "Metric-name to rolling window state dictionary."
  },
  {
    "id": "D197",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Monitoring",
    "prompt": "Alert rule evaluation dictionary by service."
  },
  {
    "id": "D198",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Monitoring",
    "prompt": "Incident timeline dictionary from event stream."
  },
  {
    "id": "D199",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Monitoring",
    "prompt": "Root-cause candidate score dictionary."
  },
  {
    "id": "D200",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Design",
    "prompt": "Build a contacts dictionary with search by prefix helper map."
  },
  {
    "id": "D201",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Bio",
    "prompt": "Gene-to-function annotation dictionary."
  },
  {
    "id": "D202",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Bio",
    "prompt": "Mutation count dictionary by chromosome."
  },
  {
    "id": "D203",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Bio",
    "prompt": "Variant co-occurrence dictionary by sample pairs."
  },
  {
    "id": "D204",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Bio",
    "prompt": "Pathway enrichment tally dictionary."
  },
  {
    "id": "D205",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "IoT",
    "prompt": "Device health status dictionary by site."
  },
  {
    "id": "D206",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "IoT",
    "prompt": "Sensor calibration parameter dictionary updates."
  },
  {
    "id": "D207",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "IoT",
    "prompt": "Time-bucketed anomaly count dictionaries."
  },
  {
    "id": "D208",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "IoT",
    "prompt": "Device dependency map for cascading failure analysis."
  },
  {
    "id": "D209",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "DevOps",
    "prompt": "Service-to-owner dictionary from config files."
  },
  {
    "id": "D210",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "DevOps",
    "prompt": "Environment variable override merge dictionaries."
  },
  {
    "id": "D211",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "DevOps",
    "prompt": "Deployment state machine dictionary per release."
  },
  {
    "id": "D212",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "DevOps",
    "prompt": "Host patch compliance dictionary by package."
  },
  {
    "id": "D213",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "ML",
    "prompt": "Label-to-index dictionary for model training."
  },
  {
    "id": "D214",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "ML",
    "prompt": "Feature-name to importance dictionary."
  },
  {
    "id": "D215",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "ML",
    "prompt": "Gradient accumulation dictionary by parameter ID."
  },
  {
    "id": "D216",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "ML",
    "prompt": "Embedding cache dictionary with eviction metadata."
  },
  {
    "id": "D217",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "ML",
    "prompt": "Online confusion-matrix dictionary updates by class."
  },
  {
    "id": "D218",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Games",
    "prompt": "Player inventory dictionary with item stacks."
  },
  {
    "id": "D219",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Medium",
    "topic": "Games",
    "prompt": "Quest state dictionary transitions by action."
  },
  {
    "id": "D220",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Games",
    "prompt": "Matchmaking pool dictionary by skill bucket."
  },
  {
    "id": "D221",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Optimization",
    "prompt": "Assignment cost dictionary for Hungarian setup."
  },
  {
    "id": "D222",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Optimization",
    "prompt": "Branch-and-bound state cache dictionary."
  },
  {
    "id": "D223",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Optimization",
    "prompt": "Constraint satisfaction variable-domain dictionaries."
  },
  {
    "id": "D224",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Optimization",
    "prompt": "Vehicle routing demand dictionary by stop."
  },
  {
    "id": "D225",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Optimization",
    "prompt": "Facility location cost dictionary."
  },
  {
    "id": "D226",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Streaming",
    "prompt": "Sessionization state dictionary by user ID."
  },
  {
    "id": "D227",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Streaming",
    "prompt": "Deduplication cache dictionary with TTL."
  },
  {
    "id": "D228",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Streaming",
    "prompt": "Out-of-order event buffer dictionary by key."
  },
  {
    "id": "D229",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Streaming",
    "prompt": "Watermark progress dictionary per partition."
  },
  {
    "id": "D230",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Streaming",
    "prompt": "Exactly-once checkpoint dictionary simulation."
  },
  {
    "id": "D231",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "AST node dictionary representation and traversal."
  },
  {
    "id": "D232",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Symbol table dictionary with nested scopes."
  },
  {
    "id": "D233",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Bytecode opcode frequency dictionary from trace."
  },
  {
    "id": "D234",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Register allocation hint dictionary by variable."
  },
  {
    "id": "D235",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Query planner statistics dictionary."
  },
  {
    "id": "D236",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Cost model dictionary for join strategy choices."
  },
  {
    "id": "D237",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Feature flag dependency dictionary validator."
  },
  {
    "id": "D238",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Multi-tenant config inheritance dictionaries."
  },
  {
    "id": "D239",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Conflict-free replicated dictionary merge rules."
  },
  {
    "id": "D240",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Advanced",
    "prompt": "Schema version migration dictionary planner."
  },
  {
    "id": "D241",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Design",
    "prompt": "Build API mock server route dictionary."
  },
  {
    "id": "D242",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Design",
    "prompt": "Build event bus subscribers dictionary."
  },
  {
    "id": "D243",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Design",
    "prompt": "Build plugin registry dictionary with capabilities."
  },
  {
    "id": "D244",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Design",
    "prompt": "Build command dispatch dictionary for CLI app."
  },
  {
    "id": "D245",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Design",
    "prompt": "Build localization dictionary with language fallback."
  },
  {
    "id": "D246",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Design",
    "prompt": "Build rule engine dictionary for decision tables."
  },
  {
    "id": "D247",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Design",
    "prompt": "Build object factory dictionary by type key."
  },
  {
    "id": "D248",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Design",
    "prompt": "Build audit log summary dictionary by actor/action."
  },
  {
    "id": "D249",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Hard",
    "topic": "Design",
    "prompt": "Build permissions matrix dictionary by role/resource."
  },
  {
    "id": "D250",
    "prefix": "D",
    "section": "Dictionary",
    "difficulty": "Easy",
    "topic": "Design",
    "prompt": "Build a mini glossary manager with dictionary CRUD."
  },
  {
    "id": "TF001",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Easy",
    "topic": "Files",
    "prompt": "Open a text file and print all lines."
  },
  {
    "id": "TF002",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Easy",
    "topic": "Files",
    "prompt": "Count how many lines are in a text file."
  },
  {
    "id": "TF003",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Easy",
    "topic": "Files",
    "prompt": "Count total words in a text file."
  },
  {
    "id": "TF004",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Easy",
    "topic": "Files",
    "prompt": "Count total characters in a text file."
  },
  {
    "id": "TF005",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Easy",
    "topic": "Files",
    "prompt": "Print only the first line of a text file."
  },
  {
    "id": "TF006",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Easy",
    "topic": "Files",
    "prompt": "Print only the last line of a text file."
  },
  {
    "id": "TF007",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Easy",
    "topic": "Files",
    "prompt": "Print line numbers with each line."
  },
  {
    "id": "TF008",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Easy",
    "topic": "Files",
    "prompt": "Find the longest line in a text file."
  },
  {
    "id": "TF009",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Easy",
    "topic": "Files",
    "prompt": "Find the shortest non-empty line in a text file."
  },
  {
    "id": "TF010",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Easy",
    "topic": "Files",
    "prompt": "Count how many blank lines are in a text file."
  },
  {
    "id": "TF011",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Easy",
    "topic": "Search",
    "prompt": "Count how many times a word appears in a file."
  },
  {
    "id": "TF012",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Easy",
    "topic": "Search",
    "prompt": "Find all line numbers where a word appears."
  },
  {
    "id": "TF013",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Easy",
    "topic": "Search",
    "prompt": "Check whether a file contains a given phrase."
  },
  {
    "id": "TF014",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Easy",
    "topic": "Transform",
    "prompt": "Create a new file with all text in uppercase."
  },
  {
    "id": "TF015",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Easy",
    "topic": "Transform",
    "prompt": "Create a new file with all text in lowercase."
  },
  {
    "id": "TF016",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Easy",
    "topic": "Transform",
    "prompt": "Remove leading/trailing spaces from each line and save."
  },
  {
    "id": "TF017",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Easy",
    "topic": "Transform",
    "prompt": "Remove empty lines and save to a new file."
  },
  {
    "id": "TF018",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Easy",
    "topic": "Transform",
    "prompt": "Replace one word with another in a file."
  },
  {
    "id": "TF019",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Easy",
    "topic": "Transform",
    "prompt": "Copy a file while reversing line order."
  },
  {
    "id": "TF020",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Easy",
    "topic": "Validation",
    "prompt": "Check if two text files have exactly the same content."
  },
  {
    "id": "TF021",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Medium",
    "topic": "Parsing",
    "prompt": "Read a CSV-like text file and split fields by comma."
  },
  {
    "id": "TF022",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Medium",
    "topic": "Parsing",
    "prompt": "Parse key=value lines into a dictionary."
  },
  {
    "id": "TF023",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Medium",
    "topic": "Parsing",
    "prompt": "Read integer values from file and ignore invalid lines."
  },
  {
    "id": "TF024",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Medium",
    "topic": "Parsing",
    "prompt": "Sum all numbers found in a text file."
  },
  {
    "id": "TF025",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Medium",
    "topic": "Parsing",
    "prompt": "Compute average of numbers stored one per line."
  },
  {
    "id": "TF026",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Medium",
    "topic": "Filtering",
    "prompt": "Save only lines containing a keyword."
  },
  {
    "id": "TF027",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Medium",
    "topic": "Filtering",
    "prompt": "Save only lines that do not contain a keyword."
  },
  {
    "id": "TF028",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Medium",
    "topic": "Filtering",
    "prompt": "Keep only lines longer than N characters."
  },
  {
    "id": "TF029",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Medium",
    "topic": "Filtering",
    "prompt": "Keep only lines that start with a prefix."
  },
  {
    "id": "TF030",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Medium",
    "topic": "Filtering",
    "prompt": "Keep only lines that end with a suffix."
  },
  {
    "id": "TF031",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Medium",
    "topic": "Sorting",
    "prompt": "Sort all lines alphabetically and save."
  },
  {
    "id": "TF032",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Medium",
    "topic": "Sorting",
    "prompt": "Sort lines by length and save."
  },
  {
    "id": "TF033",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Medium",
    "topic": "Deduplication",
    "prompt": "Remove duplicate lines while preserving order."
  },
  {
    "id": "TF034",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Medium",
    "topic": "Deduplication",
    "prompt": "Count frequency of each unique line."
  },
  {
    "id": "TF035",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Medium",
    "topic": "Chunking",
    "prompt": "Split a large text file into files of N lines each."
  },
  {
    "id": "TF036",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Medium",
    "topic": "Merge",
    "prompt": "Merge two text files line-by-line."
  },
  {
    "id": "TF037",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Medium",
    "topic": "Merge",
    "prompt": "Merge two sorted text files into one sorted file."
  },
  {
    "id": "TF038",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Medium",
    "topic": "Stats",
    "prompt": "Build a histogram of word lengths in a file."
  },
  {
    "id": "TF039",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Medium",
    "topic": "Stats",
    "prompt": "Return top 10 most common words in a file."
  },
  {
    "id": "TF040",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Medium",
    "topic": "Stats",
    "prompt": "Return top 10 longest unique words in a file."
  },
  {
    "id": "TF041",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Hard",
    "topic": "Logs",
    "prompt": "Parse log lines and count entries by log level."
  },
  {
    "id": "TF042",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Hard",
    "topic": "Logs",
    "prompt": "Find the first and last timestamp in a log file."
  },
  {
    "id": "TF043",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Hard",
    "topic": "Logs",
    "prompt": "Group log messages by date and count per day."
  },
  {
    "id": "TF044",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Hard",
    "topic": "Validation",
    "prompt": "Validate each line against a simple pattern."
  },
  {
    "id": "TF045",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Hard",
    "topic": "Comparison",
    "prompt": "Show line-by-line differences between two files."
  },
  {
    "id": "TF046",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Hard",
    "topic": "Streaming",
    "prompt": "Process a very large file line-by-line without loading all content."
  },
  {
    "id": "TF047",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Hard",
    "topic": "Streaming",
    "prompt": "Keep running word counts while reading stream input."
  },
  {
    "id": "TF048",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Hard",
    "topic": "Indexing",
    "prompt": "Build an inverted index from words to line numbers."
  },
  {
    "id": "TF049",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Hard",
    "topic": "Compression",
    "prompt": "Implement simple run-length encoding for text lines."
  },
  {
    "id": "TF050",
    "prefix": "TF",
    "section": "Text File",
    "difficulty": "Hard",
    "topic": "Design",
    "prompt": "Build a mini text report generator from multiple input files."
  }
]

export const SECTION_COUNTS: Record<ProblemSection, number> = {
  "List": 250,
  "Set": 250,
  "Dictionary": 241,
  "Text File": 50
}

export const TOTAL_PROBLEMS = PROBLEMS.length
