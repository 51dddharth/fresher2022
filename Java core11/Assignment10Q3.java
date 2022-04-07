import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class Assignment10Q3 {
    public static void main(String[] args) {

        List<String> al = new ArrayList<String>();
        al.add("A");
        al.add("quick");
        al.add("brown");
        al.add("fox");
        al.add("jumps");
        al.add("over");
        al.add("the");
        al.add("lazy");
        al.add("dog");

        Object[] objects = al.toArray();
        for (Object obj : objects)
            System.out.print(obj + " ");
    }
}
