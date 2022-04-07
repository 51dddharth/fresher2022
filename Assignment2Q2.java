import java.util.ArrayList;

public class Assignment2Q2 {
    int salay = 10000;
    int total=0;
    public int getSalary(int Salary){
        return 0;

    }
    public int totalEmployeesSalary(ArrayList<Integer> employeeSalaries){
        System.out.println(employeeSalaries);
        return total;
    }
    static class Labour extends Assignment2Q2 {
        ArrayList<Integer>al=new ArrayList<>();
        @Override
        public int getSalary(int Salary) {
            int overtime=500;
            Salary=Salary+overtime;
            al.add(Salary);
            //System.out.println("Total salary of labour is"+salary);
            return 0;

        }
    }
    static class Manager extends Assignment2Q2 {
        ArrayList<Integer>al2=new ArrayList<>();
        @Override
        public int getSalary(int Salary) {
            int overtime = 5000;
            Salary = Salary + overtime;
            al2.add(Salary);
            //System.out.println("Total salary of Manager is"+salary);
            return 0;
        }}


    public static void main(String[]args){
        Labour obj=new Labour();
        Manager obj2= new Manager();
        Assignment2Q2 obj3= new Assignment2Q2();
        obj.getSalary(30);
        obj.getSalary(20);
        obj.getSalary(60);
        obj2.getSalary(50);
        obj2.getSalary(80);
        ArrayList<Integer>labour=obj.al;
        //System.out.println(obj.al);
        ArrayList<Integer>manager=obj2.al2;
        obj3.totalEmployeesSalary(labour);
        obj3.totalEmployeesSalary(manager);

    }}