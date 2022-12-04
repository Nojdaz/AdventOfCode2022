import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class day4 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader("Inputs/day4-input"));
        ArrayList<String> listOfLines = new ArrayList<>();

        String line = reader.readLine();

        while (line != null) {
            listOfLines.add(line);
            line = reader.readLine();
        }
        reader.close();

        System.out.println("Part 1 Answer: "+ part1(listOfLines));
        System.out.println("Part 2 Answer: "+ part2(listOfLines));
    }

    private static int part2(ArrayList<String> listOfLines) {
        int overlap = 0;
        for(String l : listOfLines){
            String test = "";
            List<Integer> num = Arrays.stream(l.replaceAll("[^,\\d-]", "").split("[,-]")).map(Integer::parseInt).toList();
            if(!(num.get(0) < num.get(2) && num.get(0) < num.get(3) && num.get(1) < num.get(2) && num.get(1) < num.get(3)) && !(num.get(0) > num.get(2) && num.get(0) > num.get(3) && num.get(1) > num.get(2) && num.get(1) > num.get(3))){
                overlap +=1;
            }
        }
        return overlap;
    }

    private static int part1(ArrayList<String> listOfLines) {
        int overlap = 0;
        for(String l : listOfLines){
            List<Integer> num = Arrays.stream(l.replaceAll("[^,\\d-]", "").split("[,-]")).map(Integer::parseInt).toList();
            if((num.get(0) >= num.get(2) && num.get(1) <= num.get(3)) || (num.get(0) <= num.get(2) && num.get(1) >= num.get(3))){
                overlap +=1;
                System.out.println(num);
            }
        }


        return overlap;
    }
}
