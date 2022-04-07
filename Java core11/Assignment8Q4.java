import java.util.ArrayList;
import java.util.function.Predicate;

interface RemoveDup
{
    public int removeDup(String str);
}
public class Assignment8Q4 {
    public ArrayList<String> removeOddLength(ArrayList<String> employeeList){
        ArrayList<String> list = new ArrayList<>();

        Predicate<String> filterEmp = (p)-> {
            if(Math.floorMod(p.length(),2)==0)
                return  true;
            else
                return false;
        };

        employeeList.stream()
                .filter(filterEmp)
                .forEach(p->list.add(p));

        return  list;
    }
    public static void main(String[] args) {
        // TomJones, Harry, EthanHardy, NancySmith, Deborah
        ArrayList<String> employeeList = new ArrayList<>();
        employeeList.add("TomJones");
        employeeList.add("Harry");
        employeeList.add("EthanHardy");
        employeeList.add("NancySmith");
        employeeList.add("Deborah");

        Assignment8Q4 assignment8Q4 = new Assignment8Q4();
        System.out.println(assignment8Q4.removeOddLength(employeeList));

    }
}