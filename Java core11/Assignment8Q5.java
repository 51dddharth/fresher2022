import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;


public class Assignment8Q5 {
    List<String> list = Arrays.asList("alpha", "bravo", "charlie", "delta", "echo", "foxtrot");

    public static void main(String[] args) {
        Assignment8Q5 assignment4Q5 = new Assignment8Q5();
        processWords(assignment4Q5.list);
    }

    public static String processWords(List<String> list) {
        StringBuilder words = new StringBuilder();
        Consumer<String> consumer = p-> words.append(p.charAt(0));

        list.stream().forEach(consumer);
        System.out.println(words);
        return  words.toString();
    }
}