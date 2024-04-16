import java.util.Scanner;
public class Ex2 {
    public static void main(String[] args) {
    //    "Dear <|name|>, Thanks a lot"
        Scanner usename=new Scanner(System.in);

        System.out.println("Enter the name to be replaced");

        String newName=usename.next();
        String name="Dear <|name|>, Thanks a lot";

        System.out.println(name.replace("<|name|>",newName));
    }
}
