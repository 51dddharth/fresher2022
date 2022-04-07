import java.util.ArrayList;
import java.util.Arrays;

class orders {
    private int totalPrice;
    private String status;
    public int getTotalPrice() {
        return totalPrice;
    }
    public void setTotalPrice(int totalPrice) {
        this.totalPrice = totalPrice;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus (String status) {
        this.status = status;
    }

    public orders (Integer totalPrice, String status) {

        this.status = status;

        this.totalPrice = totalPrice;
    }}

public class Assignment8Q2 {
    public static void main(String[] args) {

        ArrayList<orders> Orders1 = new ArrayList<>(Arrays.asList(

                new orders (11000,"completed"),
                new orders(20000,"completed"),
                new orders (45000,"accepted"),
                new orders(92000,"not accepted"),
                new orders(35000,"accepted")));

        Orders1.stream().filter(t->t.getTotalPrice ()>10000).forEach(t->System.out.println("status"+t));
    }}