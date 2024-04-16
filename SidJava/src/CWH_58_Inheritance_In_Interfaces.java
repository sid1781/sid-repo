interface Bike{

    void standOff();
    void sit();
}

interface StartBike extends Bike{

    void accelerateBike();
    void Drive();
}

interface DriveLong extends StartBike{


    void Break();
}

class Driving implements DriveLong {

    @Override
    public void standOff() {
        System.out.println("Standinf off the Break");
    }

    @Override
    public void sit() {
        System.out.println("Sit on the Bike");
    }

    @Override
    public void accelerateBike() {
        System.out.println("Accelerate the Bike");
    }

    @Override
    public void Drive() {
        System.out.println("Drive Long");
    }

    @Override
    public void Break() {
        System.out.println("Applying Break");
    }
}

public class CWH_58_Inheritance_In_Interfaces {
    public static void main(String[] args) {

        Driving dvr= new Driving();

        dvr.standOff();
        dvr.sit();
        dvr.accelerateBike();
        dvr.Drive();
        dvr.Break();

    }
}
