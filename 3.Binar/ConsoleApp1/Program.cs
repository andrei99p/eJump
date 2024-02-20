internal class Program
{
    private static void Main(string[] args)
    {
        int number = Convert(13);
        Console.WriteLine(number);
        int count = Count(number);
        Console.WriteLine(count);
        Console.ReadLine();
    }

    public static int Convert(int value)
    {
        if (value == 0)
            return 0;
        else
        {
            string newValue ="";
            while (value >0)
            {
                newValue = value % 2 + newValue;
                value = value / 2;
            }

            return int.Parse(newValue);
        }
    }

    public static int Count(int value)
    {
        int count = 0;
        while (value > 0)
        {
            if (value % 10 == 1)
                count++;
            value = value / 10;
        }
        return count;
    }
}