<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<%--
The taglib directive below imports the JSTL library. If you uncomment it,
you must also add the JSTL library to the project. The Add Library... action
on Libraries node in Projects view can be used to add the JSTL 1.1 library.
--%>
<%--
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
--%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Submit Message</title>
    </head>
    <body>
        <h1 align="left">Submit Message Page</h1>   
        <form align="center" method ="post" action = "StorepersonInfo">
            <table border="0">
                <tbody>
                <tr>
                     Name: <input type="text" name="name">
                    <br/>                   
                    <fieldset>
                    <legend align="center">Gender</legend>
                      <label for="male">male</label>
                      <input type="radio" name="gender"  value="male" >
                      <label for="female">female</label>
                      <input type="radio" name="gender" value="female">         
                    </fieldset>                    
                    Birthday: <input type="date" name="birthday" />                    
                </tr>
                 <tr>
                    <td>email</td>
                    <td><input type="email" name="email" value="" size="50" /></td>
                </tr>
                <tr>
                    <td>address</td>
                    <td><select name="address">
                            <option value="Arlington">Arlington</option>
                            <option value="ArlingtonHouse">Arlington House</option>
                            <option value="Highmont">Highmont</option>
                            <option value="Malabar">Malabar</option>
                            <option value="Dakota">Dakota</option>
                            <option value="Pennsylvania">Pennsylvania</option>
                            <option value="Morrowfield">Morrowfield</option>
                            <option value="Wendover">Wendover</option>
                            <option value="Parklane">Parklane</option>
                            <option value="Kingsford">Kingsford</option>
                        </select></td>
                </tr>
                <tr>
                    <td>cellphone</td>
                    <td><input type="text" name="cellphone" value="" size="50" /></td>
                </tr>               
                <tr>
                    <td> Medical History</td>
                    <td><textarea name="message" rows="8" cols="50"></textarea></td>
                </tr>
                <tr>
                    <td> CUSTOM SOS MESSAGE</td>
                    <td><textarea name="message" rows="8" cols="50"></textarea></td>
                </tr>               
                <tr>
                <fieldset>
                    <legend>Possible Disease：</legend>
                      <label for="a">a</label>
                      <input type="checkbox" name="disease" value="a" >
                      <label for="b">b</label>
                      <input type="checkbox" name="disease" value="b">
                      <label for="c">c</label>
                      <input type="checkbox" name="disease" value="c">	
                </fieldset>
                <fieldset>
                 <legend>Do you own a car and be able to drive?：</legend>
                   <label for="yes">yes</label>
                   <input type="radio" name="car"  value="yes" >
                   <label for="no">no</label>
                   <input type="radio" name="car" value="no">         
                </fieldset>
                <fieldset>
                    <legend>Equipment</legend>
                      <label for="a">a</label>
                      <input type="checkbox" name="equipment" value="a" >
                      <label for="b">b</label>
                      <input type="checkbox" name="equipment" value="b">
                      <label for="c">c</label>
                      <input type="checkbox" name="equipment" value="c">	
                </fieldset>
                <td><input type="submit" value="Submit" name="Submit" /></td>
                </tr>
            </tbody>
        </table>
   </form>  
    <BR/><BR/>
   
    </body>
</html>
