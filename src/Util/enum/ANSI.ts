
// ANSI escape codes
// relevant info: https://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html
enum ANSI {
    RESET = '\u001b[0m',
    BOLD ='\u001b[1m',
    UNDERLINE = '\u001b[4m',
    REVERSED = '\u001b[7m',

    // NORMAL COLORS
    BLACK = '\u001b[30m',
    RED = '\u001b[31m',
    GREEN = '\u001b[32m',
    YELLOW = '\u001b[33m',
    BLUE = '\u001b[34m',
    MAGENTA = '\u001b[35m',
    CYAN = '\u001b[36m',
    WHITE = '\u001b[37m',

    // BRIGHT COLORS
    BRIGHT_BLACK = '\u001b[30m;1m',
    BRIGHT_RED = '\u001b[31m;1m',
    BRIGHT_GREEN = '\u001b[32m;1m',
    BRIGHT_YELLOW = '\u001b[33m;1m',
    BRIGHT_BLUE = '\u001b[34m;1m',
    BRIGHT_MAGENTA = '\u001b[35m;1m',
    BRIGHT_CYAN = '\u001b[36m;1m',
    BRIGHT_WHITE = '\u001b[37m;1m',

}

export default ANSI;
