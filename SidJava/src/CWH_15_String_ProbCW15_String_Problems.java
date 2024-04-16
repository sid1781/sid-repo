import java.util.Scanner;
public class CWH_15_String_ProbCW15_String_Problems {
    public static void main(String[] args) {
        Scanner in=new Scanner(System.in);
        System.out.println("Enter the name to converted into small letter");
//         String newName=in.next();
//        System.out.println("Converted Name is lower case is : "+ newName.toLowerCase());
//
//        Problem 2:Write a java program to replace the spaces with underscores;
        System.out.println("Enter the name to replace with underscores");
        String inputName  =in.nextLine();
        String underScoredName=inputName.replace(" ","_");
        System.out.println("Replaced name is : "+ underScoredName);
        in.close();

        //Problem 3: write a java program to fill in a letter template.
//        String inputName  =in.nextLine();

        String letter="Dear <|name|>, Thanks a lot";
        String replacedLetter=letter.replace("<|name|>",inputName);
        System.out.println(replacedLetter);
        //Problem 4: Write a java program to find double and triple spaces
        String spaceName="Sidd  eshar";
        System.out.println(spaceName.indexOf("   "));


    }
}
