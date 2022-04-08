<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<h1>Simple Interest Calculator</h1>
<form action="/SpringQ2/calculateSI.html" method="post">
    <p>
        Principal Amount: <input type="number" name="principalAmount"/>
    </p>
    <p>
        No. of Year: <input type="number" name="year"/>
    </p>
     <p>
        Rate Of Interest: <input type="number" name="ROI"/>
    </p>
        <p>
        <input type="submit" value="Calculate"/>
    </p>
   
    </form>
</html>