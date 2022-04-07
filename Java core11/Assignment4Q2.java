import java.util.Arrays;
import java.util.List;

public class Assignment4Q2 {
    public static void main(String[] args)
    {
        String str[] = { "num1", "num2" };
        List<String> l = Arrays.asList(str);
        System.out.println(l);

        // It will throw java.lang.UnsupportedOperationException

        l.add("num3");
    }
}
