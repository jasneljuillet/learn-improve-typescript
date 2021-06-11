/*
    --Variables

    let firstname: string = 'Jasnel';
    let age: number = 24;

*/
/*
    --function

    const getFullname = (firstname: string, lastname: string): string => {
        return firstname + " " + lastname;
    }
    console.log(getFullname("Jasnel", "Juillet"));

*/
/*
    --interfaces (pemet nou dekri antite)

        interface UserImterface {
            name: string;
            age?: number;
            getMessage(): string;
        }

        const user: UserImterface = {
            name: "Jasnel",
            age: 24,
            getMessage() {
                return `Hello ${name}`;
            }
        }

        const user2: UserImterface = {
            name: "colman",
            getMessage() {
                return `Hello ${name}`;
            }
        }

        console.log(user.getMessage());

*/
/*
        --union operator to combine data types and alias

        type ID = string;
        type PopularTag = string;
        type MaybePopularTag = PopularTag | null;

        interface UserInterface {
            id: ID;
            name: string;
            surname: string;
        }

        const popularTags:PopularTag[] = ["snake", "cofee"];
        const dragonPopular:MaybePopularTag = "dragon";

*/
/*
        --any/void/never/unknown

        //void
        const sayHello = (): void => {
            console.log("Hello");
        }
        //void is a set of undefine or null

        //any (this turns off typescript checks) / any is not a solution but start a bigger problem
        let foo: any = "wooo";
        console.log(foo.something);

*/
