from models.mcqa_generator import write_questions
from models.gesd import correct_grammar
from models.models_datasets import get_qa_model, get_gesd_model

def main():
    #MCQ_Generator = get_qa_model()
    text_corrector = get_gesd_model()

    input_text = "My brother thinked he lost his keys, so we looked everywhere for them. He finally finded them in the refrigerator, which was very strange. We couldn't stopped laughing about it. Later, he sayed he was too embarrassed to tell anyone else."
    text = get_correct_text_recursively(get_gesd_model()["model"], get_gesd_model()["tokenizer"], input_text)
    print(text)

def get_correct_text_recursively(model, tokenizer, input_text):
    texts = correct_grammar(get_gesd_model()["model"], get_gesd_model()["tokenizer"], input_text, 4)
    possible_text = {}
    for text in texts:
        temp = correct_grammar(get_gesd_model()["model"], get_gesd_model()["tokenizer"], text, 4)
        temp.append(text)
        for t in temp:
            if t in possible_text.keys():
                possible_text[t] +=1
            else:
                possible_text[t] = 1

    return max(possible_text, key=possible_text.get)



    output, generated_questions = write_questions(MCQ_Generator, "Without additional heating, radiative cooling of gas in the halos of massive galaxies (Milky Way and above) produces cold gas or stars in excess of that observed. Previous work suggested that AGN jets are likely required, but the form of jet energy required to quench remains unclear. This is particularly challenging for galaxy simulations, in which the resolution is orders of magnitude coarser than necessary to form and evolve the jet. On such scales, the uncertain parameters include: jet energy form (kinetic, thermal, and cosmic ray (CR) energy), energy, momentum, and mass flux, magnetic field strength and geometry, jet precession angle and period, opening-angle, and duty cycle. We investigate all of these parameters in a 1014MâŠ™ halo using high-resolution non-cosmological MHD simulations with the FIRE-2 (Feedback In Realistic Environments) stellar feedback model, conduction, and viscosity. We explore which scenarios match observational constraints and show that CR-dominated jets can most efficiently quench the central galaxy through a combination of CR pressure support and a modification of the thermal instability. Jets with most energy in mildly relativistic (âˆ¼ MeV or âˆ¼1010 K) thermal plasma work, but require a factor âˆ¼10 larger energy input. For a fixed energy flux, jets with higher specific energy (longer cooling times) quench more effectively. For this halo size, kinetic jets are less efficient in quenching unless they have wide opening or precession angles. Magnetic fields play a minor role except when the magnetic flux reaches â‰³1044 erg sâˆ’1 in a kinetic jet model, which causes the jet cocoon to significantly widen, and the quenching to become explosive. We conclude that the criteria for a successful jet model are an optimal energy flux and a sufficiently wide jet cocoon with long enough cooling time at the cooling radius.")

    for question in generated_questions:
        print(question.questionText)
        print(question.distractors)
        print(question.answerText)
        print("")
    pass

if __name__ == "__main__":
    main()
