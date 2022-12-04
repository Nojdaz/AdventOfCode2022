import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

public class day2 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader("Inputs/day2-input"));
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

    public static int part1(ArrayList<String> listOfLines){
        int Highscore = 0;

        for(String l : listOfLines){
            String player2 = Calculate(String.valueOf(l.charAt(0)));
            String player1 = Calculate(String.valueOf(l.charAt(2)));
            int score = Rcp(player2, player1) + value(player1);
            Highscore += score;
        }
        return (Highscore);
    }

    public static int part2(ArrayList<String> listOfLines){
        int Highscore = 0;
        for(String l : listOfLines){
            String player2 = Calculate(String.valueOf(l.charAt(0)));
            String player1 = state(String.valueOf(l.charAt(2)));
            player1 = pickCheck(player2,player1);
            int score = Rcp(player2, player1) + value(player1);
            Highscore += score;
        }
        return Highscore;
    }

    public static int Rcp(String Opponent, String you){
        int lost = 0;
        int draw = 3;
        int win = 6;

        switch (you){
            case "Rock":
                switch (Opponent){
                    case "Rock":
                        return draw;
                    case "Paper":
                        return lost;
                    case "Scissors":
                        return win;
                }
                break;
            case "Scissors":
                switch (Opponent){
                    case "Rock":
                        return lost;
                    case "Paper":
                        return win;
                    case "Scissors":
                        return draw;
                }
                break;
            case "Paper":
                switch (Opponent){
                    case "Rock":
                        return win;
                    case "Paper":
                        return draw;
                    case "Scissors":
                        return lost;
                }
                break;
        }
        return 0;
    }

    public static String pickCheck(String opponent, String condition){
        switch (condition){
            case "Win":
                switch (opponent){
                    case "Rock":
                        return "Paper";
                    case "Paper":
                        return "Scissors";
                    case "Scissors":
                        return "Rock";
                }
            case "Draw":
                switch (opponent) {
                    case "Rock":
                        return "Rock";
                    case "Paper":
                        return "Paper";
                    case "Scissors":
                        return "Scissors";
                }
            case "Lose":
                switch (opponent){
                    case "Rock":
                        return "Scissors";
                    case "Paper":
                        return "Rock";
                    case "Scissors":
                        return "Paper";
                }
        }
        return null;
    }

    public static String state(String input){
        return switch (input) {
            case "X" -> "Lose";
            case "Y" -> "Draw";
            case "Z" -> "Win";
            default -> "";
        };
    }

    public static String Calculate(String input){
        return switch (input) {
            case "A", "X" -> "Rock";
            case "B", "Y" -> "Paper";
            case "C", "Z" -> "Scissors";
            default -> "";
        };
    }

    public static int value(String input){
        return switch (input) {
            case "Rock" -> 1;
            case "Paper" -> 2;
            case "Scissors" -> 3;
            default -> 0;
        };
    }
}
