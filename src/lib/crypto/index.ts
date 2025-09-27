export async function hmacSHA256(key: string, data: string): Promise<string> {
    const enc = new TextEncoder();
    const cryptoKey = await crypto.subtle.importKey(
        "raw",
        enc.encode(key),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign", "verify"]
    );
    const sig = await crypto.subtle.sign("HMAC", cryptoKey, enc.encode(data));
    return base64url(new Uint8Array(sig));
}

export function base64url(input: string | Uint8Array): string {
    let bytes: Uint8Array;
    if (typeof input === "string") {
        bytes = new TextEncoder().encode(input);
        return btoa(String.fromCharCode(...bytes))
            .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
    } else {
        return btoa(String.fromCharCode(...input))
            .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
    }
}

export function randomId(len = 24): string {
    const bytes = crypto.getRandomValues(new Uint8Array(len));
    return Array.from(bytes, b => b.toString(16).padStart(2, "0")).join("");
}