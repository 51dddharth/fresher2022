import java.util.Arrays;
import java.util.List;

public class Assignment8Q3 {

    public static void main(String[] args) {

        List<Integer> list1 = Arrays.asList(1, 2, 3, 4, 5);
        list1.stream().forEach(t -> System.out.println("print  : " + t));

        List<Integer> list2 = Arrays.asList(1, 2, 3, 4, 5);
        list1.stream().filter(t -> t % 2 == 0).forEach(t -> System.out.println("print  Even: " + t));

        List<String> list3 = Arrays.asList();
        System.out.println(list3.stream().findAny().orElseGet(() -> "Hey this is Sid!"));
    }
}