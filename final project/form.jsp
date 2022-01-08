<%
String fullname = request.getParameter("fullname");
String username = request.getParameter("username");
String email = request.getParameter("email");
String password = request.getParameter("password");
if(fullname.equals("ashis khadka") && username.equals("ashis") && email.equals("ashis@gmail.com") && password.equals("1234"))
{
    response.sendRedirect("data.html");
}
else
{
    response.sendRedirect("form.html");}
%>
