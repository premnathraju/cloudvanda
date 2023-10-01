import java.util.Arrays;
import java.util.Random;

public class ShuffleArray {
    public static void main(String[] args) {
        int[] originalArray = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(originalArray);
        System.out.println("Shuffled Array: " + Arrays.toString(originalArray));
    }
    public static void shuffleArray(int[] array) {
        int n = array.length;
        Random rand = new Random();
        for (int i = n - 1; i > 0; i--) {
            int randIndex = rand.nextInt(i + 1);    
            int temp = array[i];
            array[i] = array[randIndex];
            array[randIndex] = temp;
        }
    }
}
