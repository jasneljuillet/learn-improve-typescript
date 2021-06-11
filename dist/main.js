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

        //never function with never can't be executed to the end/ never is something will never append
        const doSomething = (): never => {
            throw "Never";
        }

        //unknown

        let ageAny: any = 10;
        let ageUnknown: unknown = 24;

        let s1: string = ageAny; //no error because any desable typescript check
        let s2: string = ageUnknown; //error because we can't assign unknown directly in other type

        //assertion "as" makes type assertion who allow us to convert type in other type
        let ageAny: any = 10;
        let ageUnknown: unknown = 24;

        let s1: string = ageAny; //no error because any desable typescript check
        let s2: string = ageUnknown as string;

        let pageNumber: string = "10";
        let numericPageNumber: number = (pageNumber as unknown) as number;

*/
