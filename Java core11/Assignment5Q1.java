import java.util.HashSet;
import java.util.Iterator;

public class Assignment5Q1 {

    String name;
    int id;
    String salary;
    String department;
    String Branch;

    public Assignment5Q1(String name, int id, String department, String salary, String Branch)
    {
        this.name = name;
        this.id = id;
        this.salary = salary;
        this.department = department;
        this.Branch = Branch;
    }
    @Override
    public int hashCode()
    {
        return id;
    }
    @Override
    public boolean equals(Object obj)
    {
        Assignment5Q1 employee = (Assignment5Q1) obj;

        return (id == employee.id);
    }
    @Override
    public String toString()
    {
        return name+","+id+","+department+","+salary+","+Branch;
    }

    public static class MainClass {
        public static void main(String[] args) {
            HashSet<Assignment5Q1> set = new HashSet<Assignment5Q1>();

            set.add(new Assignment5Q1("Dwight Schrute", 103, "Sales", "$500", "Scranton"));
            set.add(new Assignment5Q1("Jim Halpert", 104, "Sales", "$500", "Scranton"));
            set.add(new Assignment5Q1("Kevin Malone", 105, "Accounts", "$450", "Scranton"));
            set.add(new Assignment5Q1("Oscar Martinez", 107, "Accounts", "$450", "Scranton"));
            set.add(new Assignment5Q1("Creed Bratton", 100, "Quality Assurance", "$400", "Scranton"));

            Iterator<Assignment5Q1> it = set.iterator();

            while (((Iterator<?>) it).hasNext()) {
                Assignment5Q1 employee = (Assignment5Q1) it.next();

                System.out.println(employee);
            }
        }
    }
}


