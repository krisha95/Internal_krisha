export const snakeToTitleCase = (value: string) => value
    .split('_')
    .filter((x) => x.length > 0)
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(' ');

export const kebabToTitleCase = (value: string) => value
    .split('-')
    .filter((x) => x.length > 0)
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(' ');

export const toSentenceCase = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

export const getFirstTwoLetters = (fullName: string) => {
    const names = fullName?.split(' '); 
    const initials = names?.map(name => name.charAt(0).toUpperCase()).join('');
    return initials?.substring(0, 2);
};

export const getFirstLetter = (name: string) => {
    return name[0].toUpperCase();
};

export const truncateString = (str: string, num: number) => {
    if (str.length <= num) {
        return str
    }

    return str.slice(0, num) + '...'
}