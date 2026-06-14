export default function healthStatus(person = {}) {
    if (person.health > 50) {
        return 'healthy';
    }
    if (person.health <= 50 && person.health >= 15) {
        return 'wounded';
    }
    if (person.health < 15) {
        return 'critical';
    }
}
