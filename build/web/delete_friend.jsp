<%-- 
    Document   : add_friend
    Created on : Nov 30, 2014, 4:57:42 PM
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
        <h1>Hello World!</h1>
        Recommend friend list.
        <form action="add_friend">
            <ol>    <%
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
        rs =  st.executeUpdate(q1);
        while(rs.next())
            {
            %>
            <li> <%=rs.getString("username")%>  </li>           
            <%
            b = rs.getString("username");
            }
        %>
            </ol>
        </form>
        <input type="submit" value="ok" />
    </body>
</html>
