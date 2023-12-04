import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;


public class day3 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader("Inputs/day3-input"));
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

    private static int part2(ArrayList<String> listOfLines){
        int readspan = 3;
        int index = 0;
        int score = 0;
        ArrayList<Character> chararr = new ArrayList<>();
        ArrayList<String> line = new ArrayList<>();
        for(int i=0; i < listOfLines.size()/3; i++){
            line = arrAtIndex(listOfLines, index,readspan);
            index +=3;
            int totalmatch = 0;
            for(Character c : line.get(0).toCharArray()){
                for (Character d : line.get(1).toCharArray()){
                    for (Character e : line.get(2).toCharArray()){
                        if (c == d && d== e){
                            chararr.add(c);
                            totalmatch += 1;
                            score += charvalue(c);
                            break;
                        };
                        if (totalmatch == 1){
                            break;
                        }
                    }
                    if (totalmatch == 1){
                        break;
                    }
                }

            }

        }
        return score;
    }

    public static ArrayList<String> arrAtIndex(ArrayList<String> arr, int index, int readspan){
        ArrayList<String> stringarr = new ArrayList<>();
        for(int i =0; i < readspan; i++){
            stringarr.add(arr.get(index));
            index += 1;
        }
        return stringarr;
    }

    private static int part1(ArrayList<String> listOfLines) {
        int score = 0;
        ArrayList<Character> chararr = new ArrayList<>();
        for(String l :listOfLines){
            String compartment1 = l.substring(0,l.length()/2);
            String compartment2 = l.substring(l.length()/2);
            int totalmatchesperword = 0;
            for(Character c : compartment1.toCharArray()){
                for (Character d : compartment2.toCharArray()){
                    if (c == d){
                        chararr.add(c);
                        score += charvalue(c);
                        totalmatchesperword ++;
                        break;
                    }
                }
                if (totalmatchesperword == 1){
                    break;
                }
            }
        }
        return score;
    }

    public static int charvalue(Character c){
        int score = 0;
        // A = 65 Z = 90 offset = -63
        if(c.toString().toUpperCase().equals(c.toString())){
            score = Integer.valueOf(c) - 38;
        }
        // a = 97 z = 122 offset = -96
        else{
            score = Integer.valueOf(c) - 96;
        }

        return score;
    }

    //Was not needed for the puzzle
    public static boolean doesvalueexist(ArrayList<Character> arr, Character c){
        for (Character element : arr) {
            if (element == c) {
                return true;
            }
        }
        return false;
    }

}

