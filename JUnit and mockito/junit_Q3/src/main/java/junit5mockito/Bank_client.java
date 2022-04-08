package junit5mockito;

class BankAccount {
    long id;
    double balance;
    public BankAccount(long id,double balance){
        this.id=id;
        this.balance=balance;
    }
    public void withdraw(int Withdrawl_amount) throws InsufficientBalanceException{
        if(Withdrawl_amount>balance || balance==0){
            throw new InsufficientBalanceException("Exception");
        }
        balance=balance-Withdrawl_amount;
        System.out.println("You've received "+ (int)(Withdrawl_amount)+" in cash:" );
    }

}
class InsufficientBalanceException extends Exception{
    InsufficientBalanceException(String exception){
        super(exception);
    }
}
public class Bank_client{
    public static void main(String[] args) throws InsufficientBalanceException {
        BankAccount customer1 = new BankAccount(20,000);
        customer1.withdraw(21000);
    }
}