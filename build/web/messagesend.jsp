<%-- 
    Document   : messagesend
    Created on : Nov 30, 2014, 12:49:50 PM
    Author     : yuminnow
--%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%
          Connection conn=null;
          Statement st;
          ResultSet rs=null;
          String b=null;
          Integer c;
         
        Class.forName("org.apache.derby.jdbc.ClientDriver");
        String connectionURL = "jdbc:derby://localhost:1527/IS2560";
        conn = DriverManager.getConnection(connectionURL, "IS2560", "IS2560");
            
        // here we attach the connection to a session variable
        
        st = conn.createStatement();
        c = 1;        
        
        String q1 = new String("select username from users where user_id ="+c);
        rs =  st.executeQuery(q1);
        while(rs.next())
            {
            %>
            <p> <%=rs.getString("username")%>  </p>           
            <%
            b = rs.getString("username");
            }
        %>
        <h1>Hello World!</h1>
        <form action="sendmessage">
            <table border="1">
                <thead>
                    <tr span="2">                        
                        <th>Your message</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>name</td>
                        <td><%=b%></td>
                    </tr>
                    <tr>
                        <td>date</td>
                        <td><input type="text" name="date" value="" /></td>
                    </tr>
                    <tr>
                        <td>message</td>
                        <td><input type="text" name="message" value="" /></td>
                    </tr>
                </tbody>
            </table>

        </form>
    </body>
</html>
