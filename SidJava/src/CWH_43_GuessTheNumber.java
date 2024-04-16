import java.util.Random;
import java.util.Scanner;

class Game{

  public    int guesses;
   public   int n;

     public Game()
     {
         Random random=new Random();
        this.n= random.nextInt(100);
     }
     public void setNum()
     {
         System.out.println("Guess the Number");
         Scanner sc= new Scanner(System.in);
         guesses=sc.nextInt();
     }
      public int getGuessedNumber()
      {
          return guesses;
      }
     public boolean checkTheGuess()
     {
         if (n==guesses)
         {
             System.out.println("The number guessed and generated is correct");
             return true;
         } else if (n>guesses) {
             System.out.println("The generated number is greater than the guessed number");
         }
            else {
             System.out.println("The number generated is less than the guessed number");
         }
         return false;
     }

}
public class CWH_43_GuessTheNumber {


    public static void main(String[] args) {

        Game num= new Game();
//        System.out.println(num.n);

        boolean res=false;
        while (!res){
            Game new1= new Game();
            num.setNum();
           res= num.checkTheGuess();
            System.out.println(res);
        }




    }
}
