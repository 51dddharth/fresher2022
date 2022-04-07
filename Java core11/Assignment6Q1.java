import java.util.Scanner;
public class Assignment6Q1 {
    private Integer id;
    private String Name;
    private String Department;
    private  Integer Salary;
    public Assignment6Q1(Integer id, String Name, String Department, Integer Salary) {
        super();
        this.id = id;
        this.Name=Name;
        this.Department=Department;
        this.Salary=Salary;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getDepartment() {
        return Department;
    }

    public void setDepartment(String department) {
        Department = department;
    }

    public Integer getSalary() {
        return Salary;
    }

    public void setSalary(Integer salary) {
        Salary = salary;
    }

    public void option() {
        System.out.println("enter number");
        Scanner sc=new Scanner(System.in);
        int a=sc.nextInt();
        switch (a){
            case 1:
                System.out.println("name in Sorted manner");
                break;
            case 2:
                System.out.println("salary in sorted manner");
                break;
            case 3:
                System.out.println("ID in sorted manner");
                break;
            case 4:
                System.out.println("Department in sorted manner");
                break;
        }


    }
    public String toString(){

        return "Employe [Id="+id+",name ="+Name+",Department="+Department+",Salary"+Salary+"]";
    }
}