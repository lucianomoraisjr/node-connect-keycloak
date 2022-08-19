import { MemoryStore } from "express-session";
import { Token } from "keycloak-connect";
import KeycloakConnect from "keycloak-connect"

class KeycloakService {
    private keycloak: KeycloakConnect.Keycloak
    private memoryStore: MemoryStore
    private token: Token | undefined;

    constructor() {
        console.log("Initializing Keycloak...");
        this.memoryStore = new MemoryStore();
        this.keycloak = new KeycloakConnect({ store: this.memoryStore }, 'keycloak.json');
    }

    public initKeycloak(): KeycloakConnect.Keycloak {
        if (this.keycloak) {
            console.log("Trying to init Keycloak again!");
            return this.keycloak;
        } else {
            console.log("Initializing Keycloak...");
            this.memoryStore = new MemoryStore();
            this.keycloak = new KeycloakConnect({ store: this.memoryStore }, 'keycloak.json');
            return this.keycloak;
        }
    }

    public getKeycloakInstance(): KeycloakConnect.Keycloak {
        return this.keycloak;
    }

    public getMemoryStore(): MemoryStore {
        return this.memoryStore;
    }

    public getToken(): Token | undefined {
        return this.token;
    }

    public setToken(token: Token): void {
        this.token = token;
    }
}

export const keycloak = new KeycloakService()