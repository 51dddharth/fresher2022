import java.util.HashSet;

public class Assignment6Q2 {
    public static void main(String[] args) {
        HashSet<String> employee = new HashSet<>();
        employee.add("Dwight");
        employee.add("Jim");
        employee.add("Kevin");
        employee.add("Oscar");
        employee.add("Pam");
        employee.add("Michael");
        employee.add("Phylis");
        employee.add("Stanley");
        employee.add("Toby");
        employee.add("Creed");

        System.out.println(employee.add("Ryan"));
        System.out.println(employee);
    }
}
