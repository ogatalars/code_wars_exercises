public static int RemoveElement(int[] nums, int val)
{
    int count = 0;
    int i = 0;
    while (i < nums.Length)
    {
        if (nums[i] != val)
        {
            nums[count] = nums[i];
            count++;
        }
        i++;
    }
    return count;
}