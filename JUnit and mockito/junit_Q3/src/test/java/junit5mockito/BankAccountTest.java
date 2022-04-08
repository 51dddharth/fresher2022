package junit5mockito;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class BankAccountTest {
    BankAccount cust;
    @BeforeAll
    void object_creation(){
       cust= new BankAccount(20,000);
    }
    @Test
    void withdraw() {
        assertAll(
                ()-> assertThrows(InsufficientBalanceException.class,() -> cust.withdraw(21000),"It is supposed to throw Insufficient funds exception"),
                ()-> assertThrows(InsufficientBalanceException.class,() -> cust.withdraw(22000),"It is supposed to throw Insufficient funds exception"));
    }
}
