import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";
import { PlusCircle, Trash2 } from "lucide-react";

interface Person {
  id: number;
  civilite: string;
  nom: string;
  prenom: string;
  email: string;
  tel: string;
}

export const ReservationForm = () => {
  const [persons, setPersons] = useState<Person[]>([
    {
      id: 1,
      civilite: "",
      nom: "",
      prenom: "",
      email: "",
      tel: "",
    },
  ]);

  const handleAddPerson = () => {
    setPersons([
      ...persons,
      {
        id: persons.length + 1,
        civilite: "",
        nom: "",
        prenom: "",
        email: "",
        tel: "",
      },
    ]);
  };

  const handleRemovePerson = (id: number) => {
    if (persons.length > 1) {
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Votre réservation a été envoyée avec succès !");
  };

  const handleChange = (
    id: number,
    field: keyof Person,
    value: string
  ) => {
    setPersons(
      persons.map((person) =>
        person.id === id ? { ...person, [field]: value } : person
      )
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto p-6">
      <div className="space-y-6">
        {persons.map((person, index) => (
          <div
            key={person.id}
            className="p-6 bg-white rounded-lg shadow-md space-y-4"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">
                {index === 0 ? "Informations principales" : `Personne ${index + 1}`}
              </h3>
              {index > 0 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemovePerson(person.id)}
                >
                  <Trash2 className="h-5 w-5 text-red-500" />
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Civilité</label>
                <Select
                  value={person.civilite}
                  onValueChange={(value) =>
                    handleChange(person.id, "civilite", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="m">M.</SelectItem>
                    <SelectItem value="mme">Mme</SelectItem>
                    <SelectItem value="mlle">Mlle</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Nom</label>
                <Input
                  value={person.nom}
                  onChange={(e) => handleChange(person.id, "nom", e.target.value)}
                  placeholder="Nom"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Prénom</label>
                <Input
                  value={person.prenom}
                  onChange={(e) =>
                    handleChange(person.id, "prenom", e.target.value)
                  }
                  placeholder="Prénom"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  value={person.email}
                  onChange={(e) =>
                    handleChange(person.id, "email", e.target.value)
                  }
                  placeholder="Email"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Téléphone</label>
                <Input
                  type="tel"
                  value={person.tel}
                  onChange={(e) => handleChange(person.id, "tel", e.target.value)}
                  placeholder="Téléphone"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={handleAddPerson}
          className="w-full"
        >
          <PlusCircle className="mr-2" />
          Ajouter une personne
        </Button>

        <Button type="submit" className="w-full">
          Réserver maintenant
        </Button>
      </div>
    </form>
  );
};